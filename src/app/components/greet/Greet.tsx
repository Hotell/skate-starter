import {h, Component} from 'skatejs';
import { Style } from '../sf-helpers';

export class Greeter extends Component<void>{
  static get is(){ return 'my-greet' }
  renderCallback(){
    return [
        <Style for={this} css={`
        :host {
          font-style: var(--font-style, italic);
          font-weight: var(--font-weight, bold);
        }
        div ::slotted(span) {
          text-decoration: underline;
          color: tomato;
        }
      `} />,
      <div>Hello <slot>World</slot> !</div>
    ]
  }
}
