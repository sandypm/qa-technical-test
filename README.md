# Technical Test — Senior QA

This repository contains the solutions for the **Senior QA Technical Test**.  
It is divided into three parts:

- **Part A — Programming Logic (JavaScript)**  
  - `generateEmail()` → generates unique test emails with date and counter.  
  - `runTestsQueue()` → executes test cases sequentially with retry logic.  
  - `deduplicateEvents()` → removes duplicate events and keeps the latest by ID.  

- **Part B — SQL Queries**  
  - Queries stored in `sql/partB.sql`.  
  - Includes counting failures, cleaning old executions, and status distribution.  
  - Designed for PostgreSQL.  

- **Part C — Version Control & Collaboration**  
  - Documentation in `docs/partC.md`.  
  - Explains merge strategies, CI workflow handling, and conflict resolution.  

---

## ▶️ How to Run

### Requirements
- [Node.js](https://nodejs.org/) (version 16 or higher)  
- Git installed to clone the repository  
- PostgreSQL (optional, for running SQL queries)  

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/qa-technical-test.git
   cd qa-technical-test/src
   ```

2. Run the JavaScript examples:
   ```bash
   node examples.js
   ```
   This will run test calls for:  
   - `generateEmail()` → generates unique emails.  
   - `runTestsQueue()` → executes test cases with retry.  
   - `deduplicateEvents()` → removes duplicate events and sorts them by timestamp.  

3. To run only a specific file:
   ```bash
   node partA.js
   ```

4. The SQL queries are in the file `sql/partB.sql`.  
   You can copy them and run directly in a compatible PostgreSQL database.  

5. The Git and collaboration explanations are in `docs/partC.md`.  

---

## ▶️ Expected Output Example

When running `node examples.js`, you should see output similar to:

```
=== A1: Unique Test Email Generator ===
testuser-20260206-0001@mcd.com
testuser-20260206-0002@mcd.com
testuser-20260206-0003@mcd.com

=== A2: Sequential Execution with Simple Retry ===
{
  total: 3,
  passed: 1,
  failed: 2,
  details: [
    { id: 'T1', finalStatus: 'passed', attempts: 1 },
    { id: 'T2', finalStatus: 'failed', attempts: 2 },
    { id: 'T3', finalStatus: 'failed', attempts: 2 }
  ]
}

=== A3: Deduplication of Test Events ===
[
  { id: 'T2', status: 'passed', ts: 1750 },
  { id: 'T1', status: 'passed', ts: 1800 },
  { id: 'T3', status: 'passed', ts: 1900 }
]
```

---

## ▶️ Part C — Version Control & Collaboration

### C1 — Merge Strategies
- **Merge commit**: Creates a merge commit that preserves the full history of both branches.  
  *Use when*: you want to keep track of exactly when and how a feature was integrated, especially in projects with many collaborators.  

- **Stash**: Temporarily saves local changes without committing them.  
  *Use when*: you need to switch branches quickly but don’t want to lose your current work.  

- **Rebase**: Reapplies commits from one branch on top of another, creating a clean, linear history.  
  *Use when*: you want tidy, linear history before merging a feature branch into `main`.  

---

### C2 — PR Workflow When CI Fails
1. Check the CI logs to identify the cause of the failure.  
2. Run the tests locally to confirm whether the error is reproducible.  
3. If the test is **flaky**, document it in the PR and open an issue for follow-up.  
4. If it’s a real bug, fix the problem or open a ticket for it to be addressed.  
5. Communicate clearly in the PR what was done and the current status, ensuring transparency with the team.  

---

### C3 — Resolve Conflict in a Test File
1. Update your local branch with `git fetch` and `git merge` or `git pull`.  
2. Open the conflicting file and analyze the differences.  
3. Edit manually to keep the relevant test scenarios.  
4. Run the tests locally (`npm test` or equivalent) to ensure everything works.  
5. Mark the conflict as resolved and push the changes:  
   ```bash
   git add <file>
   git commit
   git push origin <branch>
   ```

---
