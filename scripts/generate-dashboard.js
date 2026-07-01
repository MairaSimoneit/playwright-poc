const fs = require("node:fs");
const path = require("node:path");

const jsonReportPath = path.join(__dirname, "..", "reports", "playwright-results.json");
const outputDir = path.join(__dirname, "..", "public-report");
const outputFile = path.join(outputDir, "index.html");

function exitWithError(message) {
  console.error(`ERROR: ${message}`);
  process.exit(1);
}

if (!fs.existsSync(jsonReportPath)) {
  exitWithError(`No se encontró el reporte JSON en ${jsonReportPath}. Ejecuta primero "npx playwright test" y asegúrate de que el reporter JSON está configurado en playwright.config.ts.`);
}

const raw = fs.readFileSync(jsonReportPath, "utf-8");
let report;

try {
  report = JSON.parse(raw);
} catch (error) {
  exitWithError(`No se pudo parsear el JSON: ${error.message}`);
}

function collectTests(node, tests = []) {
  if (!node || typeof node !== "object") return tests;

  if (Array.isArray(node.tests)) {
    for (const test of node.tests) {
      const result = Array.isArray(test.results) ? test.results[0] : null;
      tests.push({
        title: test.title || "<unknown>",
        status: result?.status || test.status || "unknown",
        duration: Number(result?.duration ?? 0),
        file: test.file || node.file || "<unknown>",
      });
    }
  }

  if (Array.isArray(node.specs)) {
    for (const spec of node.specs) {
      collectTests(spec, tests);
    }
  }

  if (Array.isArray(node.suites)) {
    for (const suite of node.suites) {
      collectTests(suite, tests);
    }
  }

  return tests;
}

const rootSuites = Array.isArray(report.suites) ? report.suites : [];
const tests = collectTests({ suites: rootSuites });

const counts = {
  total: 0,
  passed: 0,
  failed: 0,
  skipped: 0,
};

const specMap = new Map();
let totalDurationMs = 0;

for (const test of tests) {
  const status = test.status || test.outcome || "unknown";
  const duration = Number(test.duration ?? 0);
  const file = test.file || (test.location && test.location.file) || "<unknown>";
  const specKey = file.replace(/\\/g, "/");

  counts.total += 1;
  if (status === "passed") counts.passed += 1;
  else if (status === "failed") counts.failed += 1;
  else if (status === "skipped") counts.skipped += 1;
  else counts.total += 0;

  totalDurationMs += duration;

  const existing = specMap.get(specKey) || { file: specKey, total: 0, passed: 0, failed: 0, skipped: 0, durationMs: 0, tests: [] };
  existing.total += 1;
  existing.durationMs += duration;
  if (status === "passed") existing.passed += 1;
  if (status === "failed") existing.failed += 1;
  if (status === "skipped") existing.skipped += 1;
  existing.tests.push({ title: test.title, status, durationMs: duration });
  specMap.set(specKey, existing);
}

const specList = Array.from(specMap.values()).sort((a, b) => b.durationMs - a.durationMs);
const buildDate = new Date().toISOString();
const overallStatus = report.status || (counts.failed > 0 ? "failed" : "passed");

function formatMs(ms) {
  if (ms === 0) return "0 ms";
  const seconds = Math.floor(ms / 1000);
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  const msRem = ms % 1000;
  return minutes > 0 ? `${minutes}m ${remainingSeconds}s` : `${remainingSeconds}s ${msRem}ms`;
}

const html = `<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Sudakite QA Automation Dashboard</title>
    <style>
      :root {
        color-scheme: light;
        font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        background: #f5f7fb;
        color: #111827;
        line-height: 1.5;
      }

      * {
        box-sizing: border-box;
      }

      body {
        margin: 0;
        padding: 0;
      }

      .page {
        max-width: 1100px;
        margin: 0 auto;
        padding: 32px 20px 60px;
      }

      header {
        margin-bottom: 32px;
      }

      .eyebrow {
        text-transform: uppercase;
        letter-spacing: 0.2em;
        color: #6366f1;
        font-size: 0.85rem;
        margin-bottom: 12px;
      }

      h1 {
        margin: 0;
        font-size: clamp(2rem, 3.2vw, 3rem);
        letter-spacing: -0.04em;
      }

      .intro {
        max-width: 720px;
        margin-top: 16px;
        font-size: 1rem;
        color: #475569;
      }

      .grid {
        display: grid;
        gap: 20px;
      }

      .summary {
        grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      }

      .card {
        background: #ffffff;
        border: 1px solid rgba(15, 23, 42, 0.08);
        border-radius: 24px;
        padding: 24px;
        box-shadow: 0 18px 45px rgba(15, 23, 42, 0.06);
      }

      .card h2 {
        margin: 0 0 12px;
        font-size: 1rem;
        color: #0f172a;
      }

      .stat {
        font-size: 2.35rem;
        font-weight: 700;
        margin: 0;
      }

      .stat + p {
        margin: 8px 0 0;
        color: #64748b;
      }

      .badge {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 0.65rem 0.95rem;
        border-radius: 999px;
        font-size: 0.85rem;
        font-weight: 600;
      }

      .badge.success {
        background: #dcfce7;
        color: #166534;
      }

      .badge.warning {
        background: #fef9c3;
        color: #92400e;
      }

      .badge.danger {
        background: #fee2e2;
        color: #991b1b;
      }

      .section {
        display: grid;
        gap: 20px;
      }

      .section h3 {
        margin: 0;
        font-size: 1.25rem;
      }

      .spec-list,
      .stack-list,
      .what-list {
        list-style: none;
        margin: 0;
        padding: 0;
        display: grid;
        gap: 12px;
      }

      .spec-item {
        display: grid;
        grid-template-columns: 1fr auto;
        gap: 12px;
        padding: 16px;
        border-radius: 18px;
        background: #f8fafc;
        border: 1px solid rgba(100, 116, 139, 0.12);
      }

      .spec-meta {
        color: #475569;
        font-size: 0.95rem;
        display: grid;
        gap: 6px;
      }

      .spec-title {
        font-weight: 700;
        color: #0f172a;
      }

      .meta-tag {
        display: inline-flex;
        padding: 4px 10px;
        border-radius: 999px;
        background: #eef2ff;
        color: #3730a3;
        font-size: 0.78rem;
        font-weight: 700;
      }

      .button-group {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
      }

      .button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 14px 20px;
        border-radius: 999px;
        border: none;
        text-decoration: none;
        font-weight: 700;
        color: #ffffff;
        background: #4f46e5;
        transition: transform 0.2s ease, background 0.2s ease;
      }

      .button.secondary {
        background: #0f172a;
      }

      .button:hover {
        transform: translateY(-1px);
      }

      @media (max-width: 720px) {
        .page {
          padding: 24px 16px 40px;
        }
      }
    </style>
  </head>
  <body>
    <div class="page">
      <header>
        <div class="eyebrow">Sudakite QA Automation Dashboard</div>
        <h1>Resultados de la última ejecución de Playwright</h1>
        <p class="intro">Este dashboard resume el estado de la suite de pruebas de Sudakite usando datos reales de Playwright. Incluye métricas clave, ejecución por spec y enlaces al reporte técnico de Playwright.</p>
      </header>

      <div class="grid summary">
        <section class="card">
          <h2>Estado general</h2>
          <p class="stat">${overallStatus.toUpperCase()}</p>
          <p>Última actualización: ${buildDate}</p>
        </section>

        <section class="card">
          <h2>Total de tests</h2>
          <p class="stat">${counts.total}</p>
          <p>Tests ejecutados en esta corrida.</p>
        </section>

        <section class="card">
          <h2>Duración total</h2>
          <p class="stat">${formatMs(totalDurationMs)}</p>
          <p>Tiempo aproximado de ejecución de los tests.</p>
        </section>
      </div>

      <div class="grid summary" style="margin-top: 20px;">
        <section class="card">
          <h2>Tests pasados</h2>
          <p class="stat">${counts.passed}</p>
          <p>Pruebas con resultado exitoso.</p>
        </section>

        <section class="card">
          <h2>Tests fallidos</h2>
          <p class="stat">${counts.failed}</p>
          <p>Pruebas que requieren investigación.</p>
        </section>

        <section class="card">
          <h2>Tests omitidos</h2>
          <p class="stat">${counts.skipped}</p>
          <p>Pruebas que no se ejecutaron en esta corrida.</p>
        </section>
      </div>

      <div class="section" style="margin-top: 32px;">
        <div class="card">
          <div class="button-group">
            <a class="button" href="./playwright-report/index.html" target="_blank">Abrir reporte de Playwright</a>
            <a class="button secondary" href="#specs">Ver desglose por spec</a>
          </div>
        </div>
      </div>

      <div class="section" style="margin-top: 32px;">
        <div class="card">
          <h3>Qué valida esta suite</h3>
          <ul class="what-list">
            <li>Flujo de ubicación y geolocalización en Sudakite.</li>
            <li>Acceso a la sección de spots y navegación principal.</li>
            <li>Integración con reportes técnicos para debugging y análisis.</li>
          </ul>
        </div>
      </div>

      <div class="grid summary" style="margin-top: 32px;">
        <section class="card">
          <h3>Stack usado</h3>
          <ul class="stack-list">
            <li>Playwright</li>
            <li>TypeScript</li>
            <li>GitHub Actions</li>
            <li>GitHub Pages</li>
            <li>Allure</li>
          </ul>
        </section>
      </div>

      <section id="specs" class="section" style="margin-top: 32px;">
        <div class="card">
          <h3>Desglose por spec</h3>
          ${specList
            .map(
              (spec) => `
              <article class="spec-item">
                <div>
                  <div class="spec-title">${spec.file}</div>
                  <div class="spec-meta">
                    <span>${spec.total} tests</span>
                    <span>${spec.passed} passed • ${spec.failed} failed • ${spec.skipped} skipped</span>
                    <span>Duración: ${formatMs(spec.durationMs)}</span>
                  </div>
                </div>
                <span class="meta-tag">${spec.total} tests</span>
              </article>
            `
            )
            .join("")}
        </div>
      </section>
    </div>
  </body>
</html>
`;

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

fs.writeFileSync(outputFile, html, "utf-8");
console.log(`Dashboard generado en ${outputFile}`);
