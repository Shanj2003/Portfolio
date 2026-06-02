import { overviewPage } from "../pages/overview";
import { projectsPage } from "../pages/projects";
import { experiencePage } from "../pages/experience";
import { skillsPage } from "../pages/skills";
import { contactPage } from "../pages/contact";

export function renderPage(page: string): void {
  const root = document.getElementById("root");

  if (!root) return;

  switch (page) {
    case "overview":
      root.innerHTML = overviewPage(page);
      break;

    case "projects":
      root.innerHTML = projectsPage(page);
      break;

    case "experience":
      root.innerHTML = experiencePage(page);
      break;

    case "skills":
      root.innerHTML = skillsPage(page);
      break;

    case "contact":
      root.innerHTML = contactPage(page);
      break;

    default:
      root.innerHTML = overviewPage("overview");
  }

  bindNavigation();
}

function bindNavigation() {
  const navItems = document.querySelectorAll("[data-page]");

  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      const page = item.getAttribute("data-page");

      if (page) {
        renderPage(page);
      }
    });
  });
}