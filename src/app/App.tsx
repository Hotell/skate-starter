import { h } from 'preact'
import { props } from 'skatejs'
import { Component } from './base'

import { scopeCss } from '../@skatejs/grip-tape'
import styles from './App.css'
import { store } from './app.store'
import { MarkdownEditor } from './components/markdown-editor'
// import './components/markdown-editor'

type Props = {
  greeting: string
}
export default class App extends Component<Props> {
  static is = 'my-app'
  static props = {
    greeting: { ...props.string, default: 'World' },
  }

  css = scopeCss(this, styles)

  render({ greeting }: Props) {
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
    )
  }
}
