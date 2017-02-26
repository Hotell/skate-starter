import { Component, h, prop } from 'skatejs';

import styles from './App.css';

type Props = {
  greeting: string,
};
export class App extends Component<Props> {
  static get is() { return 'my-app'; }
  static get props(){
    return {
      greeting: prop.string()
    };
  }

  greeting: string = 'World';

  renderCallback({greeting}: Props) {
    return [
      <style>{styles}</style>,
      <div>Hello {greeting}!</div>,
      <p>
        <blockquote>Don't hate! Just Skate!</blockquote>
      </p>
    ];
  }
}

;
