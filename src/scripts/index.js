import 'regenerator-runtime';

import '../styles/card.css';
import '../styles/detail.css';
import '../styles/drawer.css';
import '../styles/favorite.css';
import '../styles/footer.css';
import '../styles/hero.css';
import '../styles/list.css';
import '../styles/loader.css';
import '../styles/main.css';
import '../styles/navbar.css';
import '../styles/responsive.css';
import '../styles/skipcontent.css';

import './components/appbar-component';
import './components/drawer-component';
import './components/footer-component';
import './components/skipcontent-component';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  button: document.querySelector('#menu_resp'),
  content: document.querySelector('main'),
  drawer: document.querySelector('#drawer'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
