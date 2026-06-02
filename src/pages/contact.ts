import { sidebar } from "../components/sidebar";

export function contactPage(activePage: string): string {
  return `
  
  <div class="app-layout">

    ${sidebar(activePage)}

    <main class="content">

      <h1 class="page-title">
        Contact
      </h1>

      <div class="contact-grid">

        <div class="contact-card">
          <h2>Email</h2>
          <p>
            meshanjeev2003@gmail.com
          </p>
        </div>

        <div class="contact-card">
          <h2>GitHub</h2>
          <p>
            github.com/shanj2003
          </p>
        </div>

        <div class="contact-card">
          <h2>LinkedIn</h2>
          <p>
            linkedin.com/in/shanjeevganesh
          </p>
        </div>

      </div>

    </main>

  </div>
  `;
}