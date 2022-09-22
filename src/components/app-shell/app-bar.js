class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="app-bar">
        <p class="app-bar__brand">Herya Projects</p>
      </div>
    `;
  }
}

customElements.define('app-bar', AppBar);
