// this is how new @skate/web-components should look like

export const WC_READY_EVENT = 'WebComponentsReady';

export function whenWebComponentsReady() {
  return new Promise((resolve, reject) => {
    window.addEventListener(WC_READY_EVENT, function() {
      resolve(WC_READY_EVENT);
    });
  });
}

export function loadWebComponentPolyfills(useEs5ShimAdapter = true) {
  return loadAdapter(useEs5ShimAdapter).then(lazyLoadPolyfills);
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


  // NOTE: any browser that does not have template or ES6 features must load:
  // - webcomponents-platform(Array.from,Object.assign,CustomEvents polyfills)
  // - template polyfill
  // - this saves 20kB(HTMLImports) + 15kb(template,assign,from,CustomEvents)
  // in IE in favor of loading '@webcomponents/webcomponentsjs/webcomponents-lite.js
  if (loadFullPolyfillSuite) {
    return loadES6requiredPolyfills().then(loadCEandSDpolyfill);
  }

  if (loadShadyDOM && loadCustomElements) {
    return loadCEandSDpolyfill();
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

function loadES6requiredPolyfills() {
  return Promise.all([
    System.import('@webcomponents/template'),
    System.import('@webcomponents/webcomponents-platform')
  ]);
}

function loadCEandSDpolyfill() {
  return System.import('@webcomponents/webcomponentsjs/webcomponents-sd-ce.js');
}
