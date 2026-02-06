const { generateEmail, TestCase, runTestsQueue, deduplicateEvents } = require("./partA");

// --- Demo A1: Unique Test Email Generator ---
console.log("=== A1: Unique Test Email Generator ===");
console.log(generateEmail("testuser"));
console.log(generateEmail("testuser"));
console.log(generateEmail("qa"));

// --- Demo A2: Sequential Execution with Simple Retry ---
console.log("\n=== A2: Sequential Execution with Simple Retry ===");

// Define some sample test cases
const tests = [
  new TestCase("T1", () => true), // passes immediately
  new TestCase("T2", () => { throw new Error("Transient error"); }), // fails
  new TestCase("T3", () => Math.random() > 0.5), // sometimes passes
];

const summary = runTestsQueue(tests);
console.log(summary);

// --- Demo A3: Deduplication of Test Events ---
console.log("\n=== A3: Deduplication of Test Events ===");

const events = [
  { id: "T1", status: "failed", ts: 1730 },
  { id: "T2", status: "passed", ts: 1750 },
  { id: "T1", status: "passed", ts: 1800 },
  { id: "T3", status: "passed", ts: 1900 },
  { id: "T2", status: "passed", ts: 1500 },
];

const deduped = deduplicateEvents(events);
console.log(deduped);
