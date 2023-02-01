import "./styles.scss";

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
}: PieProgressProps) => {
  if (process.env.NODE_ENV === "development" && passed + failed > total) {
    throw new Error("PieProgress: passed + failed is greater than total");
  }

  const passedPercentage = Math.round((passed / total) * 100);
  const failedPercentage = Math.round((failed / total) * 100);
  const backgroundPieces = `conic-gradient(
    var(--color-green-60) ${passedPercentage}%,
    var(--color-red-60) 0 ${passedPercentage + failedPercentage}%,
    var(--color-gray-20) 0
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
