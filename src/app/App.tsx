import { Component, h, props } from 'skatejs';

import styles from './App.css';
import { MarkdownEditor } from './components/markdown-editor';

type Props = {
  greeting: string,
};
export default class App extends Component<Props> {
  static get is() { return 'my-app'; }
  static get props() {
    return {
      greeting: props.string
    };
  }

  greeting: string = 'World';

  renderCallback({ greeting }: Props) {
    return (
      <div>
        <style>{styles}</style>
        <div>Hello {greeting}!</div>
        <p>
          <blockquote>Don't hate! Just Skate!</blockquote>
        </p>
        <MarkdownEditor.is />
      </div>
    );
  }
}
