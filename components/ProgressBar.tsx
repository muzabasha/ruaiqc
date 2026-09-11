'use client';

interface ProgressBarProps {
  current: number;
  total: number;
  label?: string;
  showPercentage?: boolean;
  color?: 'primary' | 'quantum' | 'green';
}

export default function ProgressBar({
  current,
  total,
  label,
  showPercentage = true,
  color = 'primary',
}: ProgressBarProps) {
  const percentage = Math.round((current / total) * 100);

  const colorClasses = {
    primary: 'bg-primary-500',
    quantum: 'bg-quantum-500',
    green: 'bg-green-500',
  };

  return (
    <div className="w-full">
      {(label || showPercentage) && (
        <div className="flex justify-between items-center mb-2 text-sm">
          {label && <span className="text-gray-700 font-medium">{label}</span>}
          {showPercentage && (
            <span className="text-gray-600">{percentage}%</span>
          )}
        </div>
      )}
      <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
        <div
          className={`h-full ${colorClasses[color]} transition-all duration-500 ease-out`}
          style={{ width: `${percentage}%` }}
          role="progressbar"
          aria-valuenow={percentage}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
    </div>
  );
}
