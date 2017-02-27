import { bind } from 'decko';
import { Component, ComponentProps, h, prop, props } from 'skatejs';
import snarkdown from 'snarkdown';

import styles from './MarkdownEditor.css';

type Props = {
  content?: string;
};

export default class MarkdowEditor extends Component<Props> {
  static get is() { return 'my-markdown-editor'; }
  static get props(): ComponentProps<MarkdowEditor, Props> {
    return {
      content: prop.string(),
    };
  }

  private mdTargetRef: HTMLDivElement;

  private content: string = (
    `## Snarkdown

![snarkdown](http://emojipop.net/data/images/emoji_set_77.png)

*[Snarkdown](http://github.com/developit/snarkdown)* is __easy__ to \`use\`!

Here's an [**important** anchor link](#example).

Two newlines creates a line break.

Or, end a line with two spaces.
Just like that!`
  );

  renderCallback() {
    const { content } = this;
    return [
      <style>{styles}</style>,
      <div>
        <textarea class="in" cols={40} rows={10} onInput={this.handleInput}>{content}</textarea>
        <div class="out" ref={this.setMdRef} skip />
      </div>
    ];
  }

  renderedCallback() {
    const { content } = this;
    this.mdTargetRef.innerHTML = this.renderMarkdown(content);
  }

  @bind()
  private setMdRef(el: HTMLDivElement) {
    this.mdTargetRef = el;
  }

  @bind()
  private handleInput(ev: KeyboardEvent) {
    const { value } = ev.target as HTMLTextAreaElement;
    props(this, { content: value });
  }

  private renderMarkdown(text: string) {
    return snarkdown(text);
  }

}
