# Part C — Version Control & Collaboration

## C1 — Merge Strategies

### Merge commit
- **What it does:** Creates a merge commit that preserves the full history of both branches.  
- **When to use:** Useful when you want to keep track of exactly when and how a feature was integrated, especially in projects with many collaborators.

### Stash
- **What it does:** Temporarily saves local changes without committing them.  
- **When to use:** Ideal when you need to switch branches quickly but don’t want to lose your current work.

### Rebase
- **What it does:** Reapplies commits from one branch on top of another, creating a clean, linear history.  
- **When to use:** Good for keeping the history tidy and linear, especially before merging a feature branch into the main branch.

---

## C2 — PR Workflow When CI Fails

1. Check the CI logs to identify the cause of the failure.  
2. Run the tests locally to confirm whether the error is reproducible.  
3. If the test is **flaky** (unstable), document it in the PR and open an issue for follow-up.  
4. If it’s a real bug, fix the problem or open a ticket for it to be addressed.  
5. Communicate clearly in the PR what was done and the current status, ensuring transparency with the team.

---

## C3 — Resolve Conflict in a Test File

1. Update your local branch with `git fetch` and `git merge` or `git pull`.  
2. Open the conflicting file and analyze the differences.  
3. Edit manually to keep the relevant test scenarios.  
4. Run the tests locally (`npm test` or equivalent) to ensure everything works.  
5. Mark the conflict as resolved and push the changes:  
   ```bash
   git add <file>
   git commit
   git push origin <branch>

---
