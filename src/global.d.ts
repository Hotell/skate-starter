declare module '*.css' {
  const _: string
  export default _
}

declare module 'snarkdown' {
  export default function parse(md: string): string
}

declare module '@webcomponents/template'
declare module '@webcomponents/webcomponents-platform'
declare module '@webcomponents/webcomponentsjs/webcomponents-sd-ce'
declare module '@webcomponents/webcomponentsjs/custom-elements-es5-adapter'

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

declare const require: (name: string) => any
declare const process: any
