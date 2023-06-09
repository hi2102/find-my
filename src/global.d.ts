declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}

declare module '*.jpg'

declare module '*.svg' {
  import React = require('react');
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

declare module '*.json' {
  const value: any;
  export default value;
}

declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}