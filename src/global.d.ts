declare module '*.css' {
  const _: string;
  export default _;
}

declare module 'snarkdown' {
  export default function parse(md: string): string;
}

// Decko
declare module 'decko' {
  /**
   *
   */
  export function bind(): MethodDecorator;
  /**
   * @param caseSensitive Makes cache keys case-insensitive
   * @param cache Presupply cache storage, for seeding or sharing entries
   */
  export function memoize(caseSensitive?: boolean, cache?: Object): MethodDecorator;
  /**
   * @param delay number
   */
  export function debounce(delay?: number): MethodDecorator;
}
