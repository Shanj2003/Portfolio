import { sidebar } from "../components/sidebar";

export function experiencePage(activePage: string): string {
  return `
  
  <div class="app-layout">

    ${sidebar(activePage)}

    <main class="content">

      <h1 class="page-title">
        Experience
      </h1>

      <div class="timeline">

        <div class="timeline-card">

          <div class="timeline-year">
            Nov 2025 - May 2026
          </div>

          <h2>
            Junior Developer
          </h2>

          <h3>
            Syncfusion Software Pvt Ltd
          </h3>

          <ul>

            <li>
              Developed features using C#
              and TypeScript.
            </li>

            <li>
              Worked on Document Editor
              product.
            </li>

            <li>
              Fixed customer-reported issues.
            </li>

            <li>
              Participated in SDLC activities.
            </li>

          </ul>

        </div>

      </div>

    </main>

  </div>
  `;
}