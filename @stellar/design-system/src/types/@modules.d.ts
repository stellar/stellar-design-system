declare module "*.svg" {
  import React = require("react");

  export const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

declare module "react-copy-to-clipboard" {
  import React = require("react");

  export default React.PureComponent<{
    children: React.ReactNode;
    text: string;
    onCopy?: () => void;
  }>;
}
