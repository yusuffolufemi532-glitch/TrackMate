interface StepIndicatorProps {
  currentStep: number;
  maxStep?: number;
}

const labels = ['Discover', 'Connect', 'Explore', 'Build'];

export function StepIndicator({ currentStep, maxStep = 4 }: StepIndicatorProps) {
  const visibleSteps = labels.slice(0, maxStep);

  return (
    <div className="flex items-center justify-center gap-1 sm:gap-2">
      {visibleSteps.map((label, index) => {
        const stepNumber = index + 1;
        const isCompleted = stepNumber < currentStep;
        const isCurrent = stepNumber === currentStep;

        return (
          <div key={label} className="flex items-center">
            <div className="flex flex-col items-center gap-1">
              <div
                className={`flex items-center justify-center w-8 h-8 rounded-full text-xs font-bold transition-all duration-300 ${
                  isCompleted
                    ? 'bg-teal-500 text-white'
                    : isCurrent
                    ? 'bg-teal-500 text-white ring-4 ring-teal-100'
                    : 'bg-slate-200 text-slate-400'
                }`}
              >
                {isCompleted ? '✓' : `0${stepNumber}`}
              </div>
              <span
                className={`text-[10px] sm:text-xs font-medium transition-colors ${
                  isCompleted || isCurrent ? 'text-slate-700' : 'text-slate-400'
                }`}
              >
                {label}
              </span>
            </div>
            {index < visibleSteps.length - 1 && (
              <div
                className={`h-0.5 w-4 sm:w-8 mx-1 sm:mx-1.5 mb-4 transition-colors duration-300 ${
                  isCompleted ? 'bg-teal-500' : 'bg-slate-200'
                }`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
