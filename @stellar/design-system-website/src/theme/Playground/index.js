import React, { useEffect, useState } from "react";
import clsx from "clsx";
import useIsBrowser from "@docusaurus/useIsBrowser";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import Translate from "@docusaurus/Translate";
import BrowserOnly from "@docusaurus/BrowserOnly";
import { usePrismTheme } from "@docusaurus/theme-common";
import { PreviewBlock } from "@site/src/components/PreviewBlock";
import styles from "./styles.module.css";

function Header({ children }) {
  return <div className={clsx(styles.playgroundHeader)}>{children}</div>;
}
function LivePreviewLoader() {
  // Is it worth improving/translating?
  // eslint-disable-next-line @docusaurus/no-untranslated-text
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
    />
  );
}
function EditorWithHeader() {
  const [isEditorVisible, setIsEditorVisible] = useState(false);

  return (
    <>
      <div onClick={() => setIsEditorVisible(!isEditorVisible)}>
        <Header>{`${isEditorVisible ? "Hide" : "Show"} Live Editor`}</Header>
      </div>
      {isEditorVisible ? <ThemedLiveEditor /> : null}
    </>
  );
}
export default function Playground({ children, transformCode, ...props }) {
  const [sds, setSds] = useState({});

  // Importing SDS here because we need it async for server-side-rendering
  useEffect(() => {
    const initSds = async () => {
      setSds(await import("@stellar/design-system"));
    };
    initSds();
  }, []);

  const prismTheme = usePrismTheme();
  const noInline = props.metastring?.includes("noInline") ?? false;
  const scope = { ...props.scope, PreviewBlock, ...sds };

  return (
    <div className={styles.playgroundContainer}>
      {/* @ts-expect-error: type incompatibility with refs */}
      <LiveProvider
        code={children.replace(/\n$/, "")}
        noInline={noInline}
        transformCode={transformCode ?? ((code) => `${code};`)}
        theme={prismTheme}
        {...props}
        scope={scope}
      >
        <ResultWithHeader />
        <EditorWithHeader />
      </LiveProvider>
    </div>
  );
}
