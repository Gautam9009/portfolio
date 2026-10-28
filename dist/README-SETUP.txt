GAUTAM KADAM — AI/ML PORTFOLIO
================================

Requirements:
- Node.js 20.19+ recommended (Node 22 LTS also works)
- npm

Run locally:
1. Extract this project.
2. Open a terminal in the project folder.
3. Run: npm install
4. Run: npm run dev
5. Open the local URL shown by Vite.

Before publishing, customize these files:
- src/data.js
  * Replace email, GitHub, LinkedIn, project repository URLs.
  * Replace experience placeholders with real details.
  * Update education and expected graduation year.
- public/Gautam-Kadam-Resume.pdf
  * Add your actual PDF resume using this exact filename.
- index.html
  * Update metadata/title if needed.

Theme:
- Theme toggle is in the navigation.
- Choice is saved in localStorage.

Contact form:
- Uses mailto: and opens the visitor's default email application.
- It does not store or send messages to a backend.
- For production form delivery, connect a service or add a backend endpoint.

Deploy:
- npm run build
- Deploy the generated dist/ folder to Vercel, Netlify, or another static host.
- If deploying to a subpath, configure Vite's base option.

Important:
All project descriptions, repository URLs, email addresses, and internship details are starter placeholders. Replace them with accurate information before sharing your portfolio.
