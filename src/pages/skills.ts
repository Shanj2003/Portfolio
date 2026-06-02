import { sidebar } from "../components/sidebar";

export function skillsPage(activePage: string): string {
  return `
  
  <div class="app-layout">

    ${sidebar(activePage)}

    <main class="content">

      <h1 class="page-title">
        Skills
      </h1>

      <div class="skill-section">

        <h2>Languages</h2>

        <div class="tags">
          <span>Java</span>
          <span>TypeScript</span>
          <span>JavaScript</span>
          <span>C#</span>
          <span>Python</span>
        </div>

      </div>

      <div class="skill-section">

        <h2>Backend</h2>

        <div class="tags">
          <span>Spring Boot</span>
          <span>REST API</span>
          <span>OOP</span>
        </div>

      </div>

      <div class="skill-section">

        <h2>Database</h2>

        <div class="tags">
          <span>PostgreSQL</span>
          <span>SQL</span>
        </div>

      </div>

      <div class="skill-section">

        <h2>Tools</h2>

        <div class="tags">
          <span>Git</span>
          <span>GitHub</span>
          <span>Gitea</span>
        </div>

      </div>

    </main>

  </div>
  `;
}