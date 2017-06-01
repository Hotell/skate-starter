import { Component } from 'skatejs';
import { whenWebComponentsReady } from './@skatejs/web-components';
import './styles.css';

const mountPoint = document.getElementById('app');

whenWebComponentsReady()
  .then(() => {
    return System.import('./app')
      .then(({ App }) => {
        // here you can boot your App via your lib/framework specific code
        render(App, mountPoint);
      })
      .catch(console.error);
  });

const render = (what: typeof Component, where: HTMLElement | null) => {
  if (where) {
    where.innerHTML = `<${what.is}></${what.is}>`;
  }
};
