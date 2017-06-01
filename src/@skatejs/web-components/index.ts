require('es6-promise').polyfill();
import { loadWebComponentPolyfills } from './loaders';

loadWebComponentPolyfills();

export * from './loaders';
