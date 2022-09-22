class SkipLink extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <a href="#root" class="skip-link">Skip to content</a>
    `;
  }
}

customElements.define('skip-link', SkipLink);
