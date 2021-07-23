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
    var(--pal-success) ${passedPercentage}%,
    var(--pal-error) 0 ${passedPercentage + failedPercentage}%,
    var(--pal-background-tertiary) 0
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
