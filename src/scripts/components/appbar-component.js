class Appbar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <nav class="nav">
    <div class="logo">
      <a href="/">SigmaResto</a>
    </div>
    <div class="menu">
      <ul>
        <li class="nav_item"><a href="#/home">Home</a></li>
        <li class="nav_item"><a href="#/favorite">Favorite</a></li>
        <li class="nav_item"><a href="https://github.com/ardiwirya" target="_blank" rel="nooreferrer">About Us</a></li>
      </ul>
    </div>
  </nav>

  <div class="hamburger">
    <button class="button_menu" id="menu_resp" aria-label="button to open side menu">☰</button>
    <a href="/">SigmaResto</a>
    <div class="nav_logo">&nbsp;</div>
  </div>

  <div class="hero" id="hero">
    <div class="hero_inner">
      <p class="hero_title">SigmaResto</p>
      <p class="hero_tagline1">
      Welcome to My Restaurant
      </p>
      <p class="hero_tagline2">
      Breakfast | Launch | Dinner
      </p>
    </div>
  </div>
        `;
  }
}

customElements.define('appbar-component', Appbar);
