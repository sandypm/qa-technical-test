const { generateEmail, TestCase, runTestsQueue, deduplicateEvents } = require("./partA");

// Test A1
console.log("=== A1: Unique Email Generator ===");
console.log(generateEmail("qa"));
console.log(generateEmail("qa"));

// Test A2
console.log("\n=== A2: Sequential Execution with Retry ===");
const tests = [
  new TestCase("T1", () => true),
  new TestCase("T2", () => false),
  new TestCase("T3", () => { if (Math.random() > 0.5) return true; else return false; })
];
console.log(runTestsQueue(tests));

// Test A3
console.log("\n=== A3: Deduplicate Events ===");
const events = [
  { id: "T1", status: "failed", ts: 1730 },
  { id: "T2", status: "passed", ts: 1750 },
  { id: "T1", status: "passed", ts: 1800 },
  { id: "T3", status: "passed", ts: 1900 },
  { id: "T2", status: "passed", ts: 1500 }
];
console.log(deduplicateEvents(events));