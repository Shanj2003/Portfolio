import { sidebar } from "../components/sidebar";

export function overviewPage(activePage: string) {
  return `
  
    <div class="app-layout">

      ${sidebar(activePage)}

      <main class="content">

        <section class="hero">

      <span class="status">
        ● Currently at Syncfusion
      </span>

      <h1 class="hero-name">
        Shanjeev Ganesh
      </h1>

  <h2 class="hero-title">
    Building scalable software with
    <span>TypeScript</span>,
    <span>C#</span> and
    <span>Java</span>.
  </h2>

  <p>
    Junior Developer focused on creating reliable
    applications, solving real-world problems
    and delivering quality software.
  </p>

  <div class="hero-actions">
    <button class="primary-btn">
    <a href="/resume.pdf" download class = "resumeLink">
      Download Resume
    </a>
    </button>
  </div>

</section>

        <section class="cards">

          <div class="info-card">
            <h3>Experience</h3>
            <p>Junior Developer</p>
          </div>

          <div class="info-card">
            <h3>Projects</h3>
            <p>3 Featured Projects</p>
          </div>

          <div class="info-card">
            <h3>Core Stack</h3>
            <p>TypeScript, Java, PostgreSQL</p>
          </div>

          <div class="info-card">
            <h3>Location</h3>
            <p>Chennai, India</p>
          </div>

        </section>

        <section class="featured-projects">

  <h2>Featured Projects</h2>

  <div class="featured-grid">

    <div class="featured-card">
      <h3>AlumniConnect</h3>
      <p>
        Alumni networking platform built
        using Spring Boot.
      </p>
    </div>

    <div class="featured-card">
      <h3>Cartify</h3>
      <p>
        Full-stack shopping platform.
      </p>
    </div>

  </div>

</section>

      </main>

    </div>
  `;
}
