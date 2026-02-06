-- B1 — Count Failures in the Last 7 Days
SELECT COUNT(*) AS failures_last_7_days
FROM test_runs
WHERE status = 'failed'
  AND executed_at >= NOW() - INTERVAL '7 days';

-- B2 — Remove Old Approved Executions older than 180 Days)
DELETE FROM test_runs
WHERE status = 'passed'
  AND executed_at < NOW() - INTERVAL '180 days';

-- B3 — Executions per Status in the Last 14 Days
SELECT status, COUNT(*) AS count
FROM test_runs
WHERE executed_at >= NOW() - INTERVAL '14 days'
GROUP BY status;