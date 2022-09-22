class FootBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
  	const year = new Date().getFullYear();

    this.innerHTML = `
      <p>Copyright &copy; ${year} - <a href="https://herya.netlify.app">Herya App</a>.</p>
    `;
  }
}

customElements.define('foot-bar', FootBar);
