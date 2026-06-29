// Reusable <site-footer> component (native Web Component, no framework).
// Same pattern as <site-header>: define once, use <site-footer></site-footer>
// on any page. It also fills in the current year automatically.
class SiteFooter extends HTMLElement {
  connectedCallback() {
    const year = new Date().getFullYear();
    this.innerHTML = `
      <footer class="footer">
        <div class="container">
          <p>© ${year} Erick Dahl — Portfólio desenvolvido com HTML, CSS e JavaScript.</p>
        </div>
      </footer>`;
  }
}

customElements.define("site-footer", SiteFooter);
