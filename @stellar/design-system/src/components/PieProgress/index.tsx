import React from "react";
import "./styles.scss";

// TODO: remove component?

interface PieProgressProps {
  total: number;
  passed: number;
  failed: number;
  customSize?: string;
  customBackgroundColor?: string;
}

export const PieProgress = ({
  total,
  passed,
  failed,
  customSize,
  customBackgroundColor,
}: PieProgressProps): React.ReactElement => {
  if (
    typeof globalThis !== "undefined" &&
    (globalThis as any).process?.env?.NODE_ENV !== "production"
  ) {
    if (passed + failed > total) {
      // eslint-disable-next-line no-console
      console.error(
        "[PieProgress] Invalid props: passed (%d) + failed (%d) must not exceed total (%d).",
        passed,
        failed,
        total,
      );
    }
  }

  const passedPercentage = Math.round((passed / total) * 100);
  const failedPercentage = Math.round((failed / total) * 100);
  const backgroundPieces = `conic-gradient(
    var(--sds-clr-green-08) ${passedPercentage}%,
    var(--sds-clr-red-08) 0 ${passedPercentage + failedPercentage}%,
    var(--sds-clr-gray-04) 0
  )`;

  const customStyle = {
    ...(customBackgroundColor
      ? { "--PieProgress-background-color": customBackgroundColor }
      : {}),
    ...(customSize ? { "--PieProgress-size": customSize } : {}),
  } as React.CSSProperties;

  return (
    <div
      className="PieProgress"
      style={{ background: backgroundPieces, ...customStyle }}
    />
  );
};

PieProgress.displayName = "PieProgress";
