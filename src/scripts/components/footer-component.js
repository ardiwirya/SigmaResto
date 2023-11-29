class Footer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <footer class="footer">
            <div class="footer_content">
            <p>Copyright &copy; 2023 - Ardi Wirya Indarto</p>
            </div>
        </footer>
        `;
  }
}

customElements.define('footer-component', Footer);
