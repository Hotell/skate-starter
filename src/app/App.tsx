import { Component, h, props } from 'skatejs';

import { scopeCss } from '../utils';
import styles from './App.css';
import { store } from './app.store';
import { MarkdownEditor } from './components/markdown-editor';
import './components/markdown-editor';

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

  css = scopeCss(this, styles);

  renderCallback({ greeting }: Props) {
    return (
      <div>
        <style>{this.css}</style>
        <div>Hello {greeting}!</div>
        <p>
          <blockquote>Don't hate! Just Skate!</blockquote>
        </p>
        <MarkdownEditor.is content={store.content} />
        {/*<my-markdown-editor content={store.content}/>*/}
      </div>
    );
  }
}
