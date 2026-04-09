type FTUEProgressBarProps = {
  current: number;
  total: number;
};

export function FTUEProgressBar({ current, total }: FTUEProgressBarProps) {
  const progress = Math.max(0, Math.min(100, (current / total) * 100));

  return (
    <div className="progressShell" aria-hidden="true">
      <div className="progressBar" style={{ width: `${progress}%` }} />
    </div>
  );
}
