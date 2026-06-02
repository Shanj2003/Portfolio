export function sidebar(activePage: string): string{
  return `
  
    <aside class="sidebar">

      <div class="brand">
        <div class="brand-logo">SG</div>

        <div class="brand-info">
          <h3>Shanjeev Ganesh</h3>
          <p>Developer</p>
        </div>
      </div>

      <nav class="nav">

        <button
class="nav-item ${activePage === "overview" ? "active" : ""}"
 data-page="overview">
 Overview
</button>

<button
class="nav-item ${activePage === "projects" ? "active" : ""}"
 data-page="projects">
 Projects
</button>

<button
class="nav-item ${activePage === "experience" ? "active" : ""}"
 data-page="experience">
 experience
</button>

<button
class="nav-item ${activePage === "skills" ? "active" : ""}"
 data-page="skills">
 skills
</button>

<button
class="nav-item ${activePage === "contact" ? "active" : ""}"
 data-page="contact">
 contact
</button>

      </nav>

    </aside>

  `;
}