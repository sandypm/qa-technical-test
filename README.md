# QA Technical Test — Senior QA

This repository contains the solutions for the Senior QA technical challenge.  
The answers are divided into three parts: Programming Logic (JavaScript), SQL, and Version Control & Collaboration.

---

## 📂 Project Structure

```
qa-technical-test/
├── src/
│   ├── partA.js        # Programming logic exercises in JavaScript
│   └── examples.js     # Test executions for the functions
│
├── sql/
│   └── partB.sql       # SQL queries
│
├── docs/
│   └── partC.md        # Explanations about Git and collaboration
│
└── README.md           # Main documentation file
```

---

## Part A — Programming Logic (JavaScript)

### A1 — Unique Test Email Generator
```javascript
// Your generateEmail function here
```

---

### A2 — Sequential Execution with Simple Retry
```javascript
// Your runTestsQueue function here
```

---

### A3 — Deduplication of Test Events
```javascript
// Your deduplicateEvents function here
```

---

## Part B — SQL

### B1 — Count Failures in the Last 7 Days
```sql
SELECT COUNT(*) AS failures_last_7_days
FROM test_runs
WHERE status = 'failed'
  AND executed_at >= NOW() - INTERVAL '7 days';
```

---

### B2 — Remove Old Approved Executions (180 Days)
```sql
DELETE FROM test_runs
WHERE status = 'passed'
  AND executed_at < NOW() - INTERVAL '180 days';
```

---

### B3 — Executions per Status (Last 14 Days)
```sql
SELECT status, COUNT(*) AS count
FROM test_runs
WHERE executed_at >= NOW() - INTERVAL '14 days'
GROUP BY status;
```

---

## Part C — Version Control & Collaboration

### C1 — Merge Strategies
- **Merge commit:** Preserves full history, useful for tracking when features were integrated.  
- **Stash:** Temporarily saves local changes without committing, useful when switching branches.  
- **Rebase:** Reapplies commits on top of another branch, creating a clean linear history.

---

### C2 — PR Workflow When CI Fails
1. Check CI logs to identify the cause.  
2. Run tests locally to confirm reproducibility.  
3. If flaky, document in PR and open an issue.  
4. If real bug, fix or open a ticket.  
5. Communicate clearly in the PR what was done.

---

### C3 — Resolve Conflict in a Test File
1. Run `git fetch` and `git merge` or `git pull`.  
2. Open the conflicting file and analyze differences.  
3. Edit manually to keep relevant test scenarios.  
4. Test locally (`npm test` or equivalent).  
5. Mark as resolved:  
   ```bash
   git add <file>
   git commit
   git push origin <branch>
   ```

---
```
