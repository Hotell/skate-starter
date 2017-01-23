import {h, SFC} from 'skatejs';

const { ShadyCSS, ShadyDOM } = window;

// <Style /> helper
const cache: Record<string,any> = {};

type StyleProps = {
  for:HTMLElement,
  css: string,
}
export const Style: SFC<StyleProps> = (props, chren) => {
  if (ShadyDOM && ShadyDOM.inUse) {
    if (!cache[props.css] && props.for.localName) {
      const tmp = cache[props.css] = document.createElement('template');
      tmp.innerHTML = `<style>${props.css}</style>`;
      ShadyCSS.prepareTemplate(tmp, props.for.localName);
    }
    ShadyCSS.applyStyle(props.for);
  }
  return <style>{props.css}</style>;
};
