const hasNativeShadowDom = document.body.attachShadow;
const hasCE = Boolean(window.customElements);

boot();


function boot() {
  if (hasNativeShadowDom && hasCE) {
    return System.import('skatejs-web-components/src/native-shim.js')
      .then(loadApp)
  }
  return System.import('./polyfills.ts').then(loadApp);
}

function loadApp() {
  return System.import('./main').then(({renderApp}) => renderApp())
}
