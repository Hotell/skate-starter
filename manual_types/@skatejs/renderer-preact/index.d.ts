// Type definitions for @skatejs/renderer-preact@0.2.0
// Project: https://github.com/skatejs/renderer-preact
// TypeScript Version: 2.5
import { ComponentProps, VNode } from 'preact'
import { Renderer } from 'skatejs'

type Maybe<T> = T | null | undefined
type Constructor<T> = new (...args: any[]) => T
type ElementClass = typeof HTMLElement

// just preact aliases, they should be rmeoved probably, we don't wanna maintain any preact specifics
export interface StatelessComponent<Props> {
  (props: Props, children?: VNode[]): VNode
}
export type SFC<P> = StatelessComponent<P>

declare class PreactRenderedComponent<P = {}, S = {}> extends HTMLElement implements Renderer<Maybe<VNode>> {
  props: P & ComponentProps<any>
  render(props?: P, state?: S): Maybe<VNode>
  renderer(root: Element, html: () => VNode): void
}

type WithPreact = new <P = {}, S = {}>(...args: any[]) => PreactRenderedComponent<P, S>

export default function witPreact<T extends ElementClass = ElementClass>(Base?: T): WithPreact
