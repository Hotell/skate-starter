import { h, Component } from 'skatejs';

export class App extends Component<void> {
  static get is(){ return 'my-app' }
  renderCallback(){
    return [
      <div>Hello</div>
    ]
  }
}

