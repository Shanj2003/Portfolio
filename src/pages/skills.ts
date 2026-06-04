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
          <div class="skill-card">
  <img
    src="https://cdn.simpleicons.org/openjdk"
    alt="Java"
  />
</div>
          <div class="skill-card">
  <img
    src="https://cdn.simpleicons.org/typescript"
    alt="TypeScript"
  />
</div>
          <span>JavaScript</span>
          <span>C#</span>
          <span>Python</span>
        </div>

      </div>

      <div class="skill-section">

        <h2>Backend</h2>

        <div class="tags">
          <div class="skill-card">
  <img
    src="https://cdn.simpleicons.org/springboot"
    alt="Spring Boot"
  />
  <span>Spring Boot</span>
</div>
          <span>REST API</span>
          <span>OOP</span>
        </div>

      </div>

      <div class="skill-section">

        <h2>Database</h2>

        <div class="tags">
          <div class="skill-card">
  <img
    src="https://cdn.simpleicons.org/postgresql"
    alt="PostgreSQL"
  />
  <span>PostgreSQL</span>
</div>
          <span>SQL</span>
        </div>

      </div>

      <div class="skill-section">

        <h2>Tools</h2>

        <div class="tags">
          <div class="skill-card">
  <img
    src="https://cdn.simpleicons.org/git"
    alt="Git"
  />
  <span>Git</span>
</div>
          <span>GitHub</span>
          <span>Gitea</span>
        </div>

      </div>

    </main>

  </div>
  `;
}