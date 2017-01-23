import { h, Component } from 'skatejs';

import { Greeter } from './components/greet';
import { Style } from './components/sf-helpers/index';

export class App extends Component<void> {
  static get is() { return 'my-app' }
  renderCallback() {
    return [
      <Style for={this} css={`
        my-greet.on {
          --font-weight: bold;
        }
      `} />,
      <div>Hello</div>,
      <Greeter><span>Martin</span></Greeter>
    ]
  }
}

