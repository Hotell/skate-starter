import { h, Component } from 'skatejs';

import styles from './App.css';

export class App extends Component<void> {
  static get is() { return 'my-app' }
  renderCallback() {
    return [
      <style>{styles}</style>,
      <div>Hello</div>
    ]
  }
}

