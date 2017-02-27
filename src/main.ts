import { App } from './app';
import './styles.css';

const mountPoint = document.getElementById('app');

const render = (what: Function, where: HTMLElement | null) => {
  if (where) {
    where.innerHTML = `<${App.is}></${App.is}>`;
  }
};

render(App, mountPoint);
