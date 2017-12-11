import { define } from 'skatejs'
import RawMarkdownEditor from './MarkdownEditor'

const MarkdownEditor = define(RawMarkdownEditor as any) as typeof RawMarkdownEditor

export { MarkdownEditor }
