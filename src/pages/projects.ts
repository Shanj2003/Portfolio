import { sidebar } from "../components/sidebar";

export function projectsPage(activePage: string): string {
  return `
  
  <div class="app-layout">

    ${sidebar(activePage)}

    <main class="content">

      <h1 class="page-title">
        Projects
      </h1>

      <div class="project-grid">

        <div class="project-card">

          <h2>AlumniConnect</h2>

          <p>
            Alumni network platform built using
            Spring Boot and PostgreSQL.
          </p>

          <div class="tags">
            <span>Spring Boot</span>
            <span>PostgreSQL</span>
            <span>REST API</span>
          </div>

        </div>

        <div class="project-card">

          <h2>Cartify</h2>

          <p>
            Full-stack shopping cart application
            with authentication and wallet system.
          </p>

          <div class="tags">
            <span>Java</span>
            <span>Spring Boot</span>
            <span>PostgreSQL</span>
          </div>

        </div>

        <div class="project-card">

          <h2>Water Footprint Calculator</h2>

          <p>
            Calculates water consumption of
            daily-use products.
          </p>

          <div class="tags">
            <span>TypeScript</span>
            <span>Vite</span>
            <span>C#</span>
          </div>

        </div>

      </div>

    </main>

  </div>
  `;
}