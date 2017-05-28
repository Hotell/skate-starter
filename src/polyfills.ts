loadAdapter().then(lazyLoadPolyfills).then(bootstrap);

// app bootstrap
function bootstrap() {
  const ready = new Promise((resolve, reject) => {
    window.addEventListener('WebComponentsReady', function() {
      System.import('./main').then(resolve).catch(reject);
    });
  });
  return ready;
}


// custom LOADER
function loadAdapter(useAdapter = true) {
  return useAdapter && window.customElements
    // tslint:disable-next-line:max-line-length
    ? System.import(/* webpackChunkName = "es5-adapter" */ '@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js')
    : Promise.resolve();
}

function lazyLoadPolyfills() {

  // global for (1) existence means `WebComponentsReady` will file,
  // (2) WebComponents.ready == true means event has fired.
  window.WebComponents = window.WebComponents || {};
  // Feature detect which polyfill needs to be imported.

  // tslint:disable-next-line:max-line-length
  const loadCustomElements = !window.customElements || window.customElements.forcePolyfill;
  const loadShadyDOM = !('attachShadow' in Element.prototype && 'getRootNode' in Element.prototype) || (window.ShadyDOM && window.ShadyDOM.force);
  // tslint:disable-next-line:max-line-length
  const loadFullPolyfillSuite = !('content' in document.createElement('template')) || !window.Promise || !Array.from || !(document.createDocumentFragment().cloneNode() instanceof DocumentFragment);


  if (loadShadyDOM && loadCustomElements) {
    return System.import('@webcomponents/webcomponentsjs/webcomponents-sd-ce.js');
  }
  // NOTE: any browser that does not have template or ES6 features
  // must load the full suite (called `lite` for legacy reasons) of polyfills.
  if (loadFullPolyfillSuite) {
    return System.import('@webcomponents/webcomponentsjs/webcomponents-lite.js');
  }

  // Ensure `WebComponentsReady` is fired also when there are no polyfills loaded.
  // however, we have to wait for the document to be in 'interactive' state,
  // otherwise a rAF may fire before scripts in <body>

  const fire = function() {
    requestAnimationFrame(function() {
      window.WebComponents.ready = true;
      document.dispatchEvent(new CustomEvent('WebComponentsReady', { bubbles: true }));
    });
  };

  if (document.readyState !== 'loading') {
    fire();
  } else {
    document.addEventListener('readystatechange', function wait() {
      fire();
      document.removeEventListener('readystatechange', wait);
    });
  }
}



