
interface Window {
  ShadyCSS: ShadyCSS.ShadyCSSStatic,
  ShadyDOM: ShadyDOM.ShadyDOMStatic
}

declare namespace ShadyCSS {
  interface ShadyCSSStatic {
      prepareTemplate(templateRef:HTMLTemplateElement,elementName:string, typeExtension?:boolean): any,
      applyStyle(ref:any, style?:Object): void,
      updateStyles(styles:Object): void,
  }

}

declare namespace ShadyDOM {
  interface ShadyDOMStatic {
    inUse: boolean,
  }
}

