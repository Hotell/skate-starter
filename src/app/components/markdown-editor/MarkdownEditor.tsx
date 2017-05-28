import { bind } from 'decko';
import { Component, ComponentProps, h, props } from 'skatejs';
import snarkdown from 'snarkdown';

import { scopeCss } from '../../../utils';
import styles from './MarkdownEditor.css';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'my-markdown-editor': Props
    }
  }
}

type Props = {
  content?: string;
};

export default class MarkdowEditor extends Component<Props> {
  static readonly is = 'my-markdown-editor';
  static get props(): ComponentProps<MarkdowEditor, Props> {
    return {
      content: props.string,
    };
  }

  css = scopeCss(this, styles);

  private mdTargetRef: HTMLDivElement;

  renderCallback() {
    const { content } = this.props;
    return (
      <div>
        <style>{this.css}</style>
        <textarea class="in" cols={40} rows={10} onInput={this.handleInput}>{content}</textarea>
        <div class="out" ref={this.setMdRef} />
      </div>
    );
  }

  renderedCallback() {
    const { content = '' } = this.props;
    this.mdTargetRef.innerHTML = this.renderMarkdown(content);
  }

  @bind()
  private setMdRef(el: HTMLDivElement) {
    this.mdTargetRef = el;
  }

  @bind()
  private handleInput(ev: KeyboardEvent) {
    const { value } = ev.target as HTMLTextAreaElement;
    this.props = { content: value };
  }

  private renderMarkdown(text: string) {
    return snarkdown(text);
  }

}
