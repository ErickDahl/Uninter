// Reusable <site-header> component (native Web Component, no framework).
// Define it once and use <site-header></site-header> on any page —
// the browser renders the same menu everywhere, like a React component.
class SiteHeader extends HTMLElement {
  // List of menu links
  static links = [
    { href: "index.html", label: "Sobre mim" },
    { href: "formacao.html", label: "Formação" },
    { href: "portfolio.html", label: "Portfólio" },
    { href: "contato.html", label: "Contato" },
  ];

  // Builds the <li> items, marking the current page as active
  buildMenuItems() {
    const currentPage = location.pathname.split("/").pop() || "index.html";
    return SiteHeader.links
      .map(({ href, label }) => {
        const activeClass = href === currentPage ? ' class="active"' : "";
        return `<li><a href="${href}"${activeClass}>${label}</a></li>`;
      })
      .join("");
  }

  // Called automatically by the browser when the element is added to the page.
  // Renders into the light DOM so the global CSS and script.js still apply.
  connectedCallback() {
    this.innerHTML = `
      <header class="header">
        <div class="container header-content">
          <a href="index.html" class="logo">Erick&nbsp;Dahl</a>
          <button id="menuButton" class="menu-button" aria-label="Abrir menu" aria-expanded="false">
            <span></span><span></span><span></span>
          </button>
          <nav>
            <ul id="menu" class="menu">
              ${this.buildMenuItems()}
              <li><button id="themeButton" class="theme-button" aria-label="Alternar tema claro/escuro">🌙</button></li>
            </ul>
          </nav>
        </div>
      </header>`;
  }
}

// Registers the custom element so <site-header> works in the HTML
customElements.define("site-header", SiteHeader);
