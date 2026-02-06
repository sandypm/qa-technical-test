
Here’s the full How to Run section translated into English so you can copy and paste it at the end of your README, Sandra 👌:

▶️ How to Run
Requirements
- Node.js (version 16 or higher)
- Git installed to clone the repository
Steps
- Clone the repository:
git clone https://github.com/your-username/qa-technical-test.git
cd qa-technical-test/src
- Run the JavaScript examples:
node examples.js
- This will run test calls for:
- generateEmail() → generates unique emails.
- runTestsQueue() → executes test cases with retry.
- deduplicateEvents() → removes duplicate events and sorts them by timestamp.
- To run only a specific file:
node partA.js
- The SQL queries are in the file sql/partB.sql.
You can copy them and run directly in a compatible PostgreSQL database.
- The Git and collaboration explanations are in docs/partC.md.