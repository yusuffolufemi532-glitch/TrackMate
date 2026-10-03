import { useState } from 'react';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';
import { StepIndicator } from './StepIndicator';
import { interests, strengths, stages, type OnboardingSelections } from '../data/pathData';

interface OnboardingProps {
  onComplete: (selections: OnboardingSelections) => void;
  onBack: () => void;
}

export function Onboarding({ onComplete, onBack }: OnboardingProps) {
  const [step, setStep] = useState(0);
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [selectedStrengths, setSelectedStrengths] = useState<string[]>([]);
  const [selectedStage, setSelectedStage] = useState<string>('');

  const toggleInterest = (id: string) => {
    setSelectedInterests((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const toggleStrength = (id: string) => {
    setSelectedStrengths((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const canProceed = () => {
    if (step === 0) return selectedInterests.length > 0;
    if (step === 1) return selectedStrengths.length > 0;
    if (step === 2) return selectedStage !== '';
    return false;
  };

  const handleNext = () => {
    if (step < 2) {
      setStep(step + 1);
    } else {
      onComplete({
        interests: selectedInterests,
        strengths: selectedStrengths,
        stage: selectedStage,
      });
    }
  };

  const handleBack = () => {
    if (step > 0) {
      setStep(step - 1);
    } else {
      onBack();
    }
  };

  const stepHints = ['Pick all that apply', 'Pick all that apply', 'Choose one'];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <header className="bg-white border-b border-slate-200 px-5 py-4 sticky top-0 z-10">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-3">
            <button
              onClick={handleBack}
              className="flex items-center gap-1.5 text-slate-500 hover:text-slate-800 text-sm font-medium transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </button>
            <span className="text-xs font-medium text-slate-400">
              Question {step + 1} of 3
            </span>
          </div>
          <StepIndicator currentStep={1} maxStep={2} />
        </div>
      </header>

      <main className="flex-1 px-5 py-6">
        <div className="max-w-2xl mx-auto">
          <div key={step} className="animate-[fadeIn_0.4s_ease-out]">
            <h2 className="text-2xl font-bold text-slate-900 mb-1">
              {step === 0 && 'What are you interested in becoming or exploring?'}
              {step === 1 && 'What do you naturally enjoy doing?'}
              {step === 2 && 'What stage are you currently in?'}
            </h2>
            <p className="text-slate-500 text-sm mb-6">{stepHints[step]}</p>

            {step === 0 && (
              <div className="grid grid-cols-2 gap-3">
                {interests.map((interest) => {
                  const isSelected = selectedInterests.includes(interest.id);
                  const Icon = interest.icon;
                  return (
                    <button
                      key={interest.id}
                      onClick={() => toggleInterest(interest.id)}
                      className={`relative p-4 rounded-xl border-2 text-left transition-all active:scale-[0.97] ${
                        isSelected
                          ? 'border-teal-500 bg-teal-50 shadow-sm'
                          : 'border-slate-200 bg-white hover:border-slate-300'
                      }`}
                    >
                      {isSelected && (
                        <div className="absolute top-2.5 right-2.5 w-5 h-5 rounded-full bg-teal-500 flex items-center justify-center">
                          <Check className="w-3 h-3 text-white" strokeWidth={3} />
                        </div>
                      )}
                      <div className="text-2xl mb-2">{interest.emoji}</div>
                      <div className="flex items-center gap-1.5">
                        <Icon className={`w-4 h-4 ${isSelected ? 'text-teal-600' : 'text-slate-400'}`} />
                        <span className={`text-sm font-semibold ${isSelected ? 'text-teal-700' : 'text-slate-700'}`}>
                          {interest.label}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            )}

            {step === 1 && (
              <div className="grid grid-cols-2 gap-3">
                {strengths.map((strength) => {
                  const isSelected = selectedStrengths.includes(strength.id);
                  const Icon = strength.icon;
                  return (
                    <button
                      key={strength.id}
                      onClick={() => toggleStrength(strength.id)}
                      className={`relative p-4 rounded-xl border-2 text-left transition-all active:scale-[0.97] ${
                        isSelected
                          ? 'border-teal-500 bg-teal-50 shadow-sm'
                          : 'border-slate-200 bg-white hover:border-slate-300'
                      }`}
                    >
                      {isSelected && (
                        <div className="absolute top-2.5 right-2.5 w-5 h-5 rounded-full bg-teal-500 flex items-center justify-center">
                          <Check className="w-3 h-3 text-white" strokeWidth={3} />
                        </div>
                      )}
                      <div className="text-2xl mb-2">{strength.emoji}</div>
                      <div className="flex items-center gap-1.5">
                        <Icon className={`w-4 h-4 ${isSelected ? 'text-teal-600' : 'text-slate-400'}`} />
                        <span className={`text-sm font-semibold ${isSelected ? 'text-teal-700' : 'text-slate-700'}`}>
                          {strength.label}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            )}

            {step === 2 && (
              <div className="space-y-3">
                {stages.map((stage) => {
                  const isSelected = selectedStage === stage.id;
                  return (
                    <button
                      key={stage.id}
                      onClick={() => setSelectedStage(stage.id)}
                      className={`w-full p-4 rounded-xl border-2 text-left transition-all active:scale-[0.98] flex items-center justify-between ${
                        isSelected
                          ? 'border-teal-500 bg-teal-50 shadow-sm'
                          : 'border-slate-200 bg-white hover:border-slate-300'
                      }`}
                    >
                      <div>
                        <div className={`text-base font-semibold ${isSelected ? 'text-teal-700' : 'text-slate-800'}`}>
                          {stage.label}
                        </div>
                        <div className="text-sm text-slate-500 mt-0.5">{stage.description}</div>
                      </div>
                      <div
                        className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                          isSelected ? 'border-teal-500 bg-teal-500' : 'border-slate-300'
                        }`}
                      >
                        {isSelected && <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />}
                      </div>
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </main>

      <footer className="sticky bottom-0 bg-white border-t border-slate-200 px-5 py-4">
        <div className="max-w-2xl mx-auto">
          <button
            onClick={handleNext}
            disabled={!canProceed()}
            className={`w-full py-3.5 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 ${
              canProceed()
                ? 'bg-teal-500 text-white hover:bg-teal-600 active:scale-[0.98] shadow-md shadow-teal-500/20'
                : 'bg-slate-100 text-slate-400 cursor-not-allowed'
            }`}
          >
            {step === 2 ? 'See my pathway' : 'Continue'}
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </footer>
    </div>
  );
}
