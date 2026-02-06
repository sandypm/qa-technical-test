// A1 — Unique Test Email Generator
let _counter = 1;
function generateEmail(prefix) {
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const dd = String(today.getDate()).padStart(2, "0");
  const dateStr = `${yyyy}${mm}${dd}`;
  const counterStr = String(_counter).padStart(4, "0");
  _counter++;
  return `${prefix}-${dateStr}-${counterStr}@mcd.com`;
}

// A2 — Sequential Execution with Simple Retry
class TestCase {
  constructor(id, runner) {
    this.id = id;
    this.runner = runner; // function returning true/false or throwing
  }
  run() {
    return this.runner();
  }
}

function runTestsQueue(tests) {
  let passed = 0, failed = 0;
  const details = [];

  for (const test of tests) {
    let attempts = 0;
    let finalStatus = "failed";

    while (attempts < 2) {
      attempts++;
      try {
        const result = test.run();
        if (result === true) {
          finalStatus = "passed";
          break;
        }
      } catch (err) {
        // erro tratado como falha
      }
    }

    if (finalStatus === "passed") passed++;
    else failed++;

    details.push({ id: test.id, finalStatus, attempts });
  }

  return { total: tests.length, passed, failed, details };
}

// A3 — Deduplication of Test Events
function deduplicateEvents(events) {
  const latestById = new Map();

  for (const ev of events) {
    if (!latestById.has(ev.id) || ev.ts > latestById.get(ev.id).ts) {
      latestById.set(ev.id, ev);
    }
  }

  const result = Array.from(latestById.values());
  result.sort((a, b) => a.ts - b.ts);
  return result;
}

// Export functions for examples.js
module.exports = { generateEmail, TestCase, runTestsQueue, deduplicateEvents };