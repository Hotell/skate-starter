import { define } from 'skatejs';
import { App } from './app';

const mountPoint = document.getElementById('app');

const render = (what: Function, where: HTMLElement | null) => {
  if (where) {
    where.innerHTML = `<${App.is}></${App.is}>`;
  }
};

render(App, mountPoint);
