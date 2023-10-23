import React, { useEffect, useState } from "react";
import clsx from "clsx";
// eslint-disable-next-line import/no-unresolved
import useIsBrowser from "@docusaurus/useIsBrowser";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
// eslint-disable-next-line import/no-unresolved
import BrowserOnly from "@docusaurus/BrowserOnly";
import { usePrismTheme } from "@docusaurus/theme-common";
import { PreviewBlock } from "@site/src/components/PreviewBlock";
import EditorIconSvg from "@site/static/img/editor-icon.svg";

import styles from "./styles.module.css";

function Header({ children }) {
  return <div className={clsx(styles.playgroundHeader)}>{children}</div>;
}
function LivePreviewLoader() {
  return <div>Loading...</div>;
}
function ResultWithHeader() {
  return (
    <>
      {/* https://github.com/facebook/docusaurus/issues/5747 */}
      {/* <div className={styles.playgroundPreview}> */}
      <BrowserOnly fallback={<LivePreviewLoader />}>
        {() => (
          <>
            <LivePreview />
            <LiveError />
          </>
        )}
      </BrowserOnly>
      {/* </div> */}
    </>
  );
}
function ThemedLiveEditor() {
  const isBrowser = useIsBrowser();
  return (
    <LiveEditor
      // We force remount the editor on hydration,
      // otherwise dark prism theme is not applied
      key={String(isBrowser)}
      className={styles.playgroundEditor}
      disabled
    />
  );
}
function EditorWithHeader() {
  const [isEditorVisible, setIsEditorVisible] = useState(false);

  return (
    <>
      {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
      <div onClick={() => setIsEditorVisible(!isEditorVisible)}>
        <Header>
          <EditorIconSvg />
          {`${isEditorVisible ? "Hide" : "Show"} Code`}
        </Header>
      </div>
      {isEditorVisible ? <ThemedLiveEditor /> : null}
    </>
  );
}

// Playground is used only to show the result
export default function Playground({ children, ...props }) {
  const [sds, setSds] = useState({});

  // Importing SDS here because we need it async for server-side-rendering
  useEffect(() => {
    const initSds = async () => {
      setSds(await import("@stellar/design-system"));
    };
    initSds();
  }, []);

  const scope = { ...props.scope, PreviewBlock, ...sds };

  return (
    <div className={styles.playgroundContainer}>
      {/* @ts-expect-error: type incompatibility with refs */}
      <LiveProvider code={children.replace(/\n$/, "")} {...props} scope={scope}>
        <ResultWithHeader />
      </LiveProvider>
    </div>
  );
}

// PlaygroundEditor is used only to show the editor
export function PlaygroundEditor({ children }) {
  const prismTheme = usePrismTheme();

  return (
    <div className={styles.playgroundContainer}>
      {/* @ts-expect-error: type incompatibility with refs */}
      <LiveProvider code={children.replace(/\n$/, "")} theme={prismTheme}>
        <EditorWithHeader />
      </LiveProvider>
    </div>
  );
}
