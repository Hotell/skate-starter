declare const System: {
  import(path:string): Promise<any>
}

declare const require: (path:string)=>any;

interface Window {
  customElements: any,
}
