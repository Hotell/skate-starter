declare module '*.css' {
  const _: string;
  export default _;
}

declare module 'snarkdown' {
  export default function parse(md: string): string;
}
