// import { Component } from 'skatejs';
import { hasNativeShadowDomSupport } from '../env'

const $template = (typeof Symbol === 'function' && Symbol()) || '__$template__'

export function scopeCss(elem: HTMLElement & { [key: string]: any }, css: string): string | void {
  if (hasNativeShadowDomSupport) {
    return css
  }
  const template = elem[$template] || (elem[$template] = document.createElement('template'))
  template.innerHTML = `<style>${css}</style>`
  window.ShadyCSS.prepareTemplate(template, elem.localName)
}
