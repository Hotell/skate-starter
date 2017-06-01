const { attachShadow } = HTMLElement.prototype;

export const hasNativeShadowDomSupport = attachShadow && attachShadow.toString().indexOf('native code') > -1;
