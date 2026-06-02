import "./styles/global.css";
import "./styles/layout.css";

import { renderPage } from "./core/router";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div id="root"></div>
`;

renderPage("overview");