declare module '*.css' {
  const _: string;
  export default _;
}

declare module 'snarkdown' {
  export default function parse(md: string): string;
}


declare const System: {
  import(path: string): Promise<any>
};


// webcomponents polyfill

interface Window {
  WebComponents: any
  ShadyDOM: any
  ShadyCSS: any
  Promise: typeof Promise
}

interface CustomElementRegistry {
  forcePolyfill: any
}

declare const require: (name: string) => any;
declare const process: any;
