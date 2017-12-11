import { h } from 'preact'
import { ComponentProps, props } from 'skatejs'
import snarkdown from 'snarkdown'
import { Component } from '../../base'

import { scopeCss } from '../../../@skatejs/grip-tape'
import styles from './MarkdownEditor.css'

type Props = {
  content?: string
}
type State = {
  markdown: string
}

export default class MarkdowEditor extends Component<Props, State> {
  static readonly is = 'my-markdown-editor'
  static props: ComponentProps<Props> = {
    content: props.string,
  }

  state = {
    markdown: this.props.content || '',
  }

  css = scopeCss(this, styles)

  private mdTargetRef: HTMLDivElement

  private _stateInitialised = false

  updating() {
    // @NOTE -> this is super ugly indeed and needs to be done because state is a prop of this.props and is empty
    // within constructor :-/
    if (!this._stateInitialised) {
      this.state = { markdown: this.props.content || '' }
      this._stateInitialised = true
    }
  }

  render() {
    const { markdown } = this.state
    return (
      <div>
        <style>{this.css}</style>
        <textarea class="in" cols={40} rows={10} onInput={this.handleInput}>
          {markdown}
        </textarea>
        <div class="out" ref={this.setMdRef} />
      </div>
    )
  }

  rendered() {
    const { markdown } = this.state
    this.mdTargetRef.innerHTML = this.renderMarkdown(markdown)
  }

  private setMdRef = (el: Element | undefined) => {
    this.mdTargetRef = el as HTMLDivElement
  }

  private handleInput = (ev: Event) => {
    const { value } = ev.target as HTMLTextAreaElement
    this.state = { markdown: value }
  }

  private renderMarkdown(text: string) {
    return snarkdown(text)
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'my-markdown-editor': Props
    }
  }
}
