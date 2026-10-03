import { ArrowLeft, Lock, Construction, ArrowRight } from 'lucide-react';
import { StepIndicator } from './StepIndicator';
import { generatePath, type OnboardingSelections } from '../data/pathData';

interface ExploreProps {
  selections: OnboardingSelections;
  onBack: () => void;
  onRestart: () => void;
}

export function Explore({ selections, onBack, onRestart }: ExploreProps) {
  const path = generatePath(selections);
  const upcomingSteps = [
    {
      number: '03',
      label: 'Explore',
      status: 'current',
      description: 'Dive deeper into your technology connections and try a hands-on project.',
    },
    {
      number: '04',
      label: 'Build',
      status: 'locked',
      description: 'Apply your skills with guided projects and connect to real opportunities.',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <header className="bg-white border-b border-slate-200 px-5 py-4 sticky top-0 z-10">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-3">
            <button
              onClick={onBack}
              className="flex items-center gap-1.5 text-slate-500 hover:text-slate-800 text-sm font-medium transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to my path
            </button>
            <button
              onClick={onRestart}
              className="text-slate-400 hover:text-slate-600 text-sm transition-colors"
            >
              Start over
            </button>
          </div>
          <StepIndicator currentStep={3} maxStep={4} />
        </div>
      </header>

      <main className="flex-1 px-5 py-6">
        <div className="max-w-2xl mx-auto space-y-5">
          <div className="text-center py-2">
            <h1 className="text-2xl font-bold text-slate-900 mb-2">You're on the Explore stage</h1>
            <p className="text-slate-500 text-sm">
              Your path: <span className="font-semibold text-teal-600">{path.title}</span>
            </p>
          </div>

          {/* Current step */}
          <div className="bg-white rounded-2xl border-2 border-teal-300 shadow-sm p-5 animate-[fadeIn_0.5s_ease-out]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-teal-500 text-white flex items-center justify-center font-bold text-sm">
                03
              </div>
              <div>
                <h2 className="font-bold text-slate-900">Explore</h2>
                <p className="text-xs text-teal-600 font-medium">You are here</p>
              </div>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              {upcomingSteps[0].description}
            </p>

            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <h3 className="font-semibold text-slate-800 text-sm mb-1">{path.tryThis.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{path.tryThis.description}</p>
              </div>

              <div className="p-4 rounded-xl bg-blue-50 border border-blue-100">
                <h3 className="font-semibold text-blue-900 text-sm mb-2">Explore these technology areas</h3>
                <div className="flex flex-wrap gap-2">
                  {path.techConnections.map((conn) => (
                    <span
                      key={conn.title}
                      className="text-xs font-medium text-blue-700 bg-blue-100 px-2.5 py-1 rounded-full"
                    >
                      {conn.title}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-amber-50 border border-amber-100">
                <h3 className="font-semibold text-amber-900 text-sm mb-2">Focus on these starter skills</h3>
                <div className="flex flex-wrap gap-2">
                  {path.starterSkills.map((skill) => (
                    <span
                      key={skill.title}
                      className="text-xs font-medium text-amber-700 bg-amber-100 px-2.5 py-1 rounded-full"
                    >
                      {skill.title}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Locked step */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 opacity-75 animate-[fadeIn_0.6s_ease-out]">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-slate-200 text-slate-400 flex items-center justify-center font-bold text-sm">
                04
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h2 className="font-bold text-slate-500">Build</h2>
                  <Lock className="w-3.5 h-3.5 text-slate-400" />
                </div>
                <p className="text-xs text-slate-400">Coming in the next update</p>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              {upcomingSteps[1].description}
            </p>
          </div>

          {/* Coming soon note */}
          <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-100 border border-slate-200 animate-[fadeIn_0.7s_ease-out]">
            <Construction className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-slate-600 mb-1">More coming soon</p>
              <p className="text-xs text-slate-400 leading-relaxed">
                The Explore and Build stages are being developed. For now, use your pathway as a guide to start exploring on your own — try the project suggestion, look into the technology areas, and begin building your starter skills.
              </p>
            </div>
          </div>

          <div className="pt-2 pb-4">
            <button
              onClick={onBack}
              className="w-full bg-slate-900 text-white py-3.5 rounded-xl font-semibold hover:bg-slate-800 active:scale-[0.98] transition-all shadow-md flex items-center justify-center gap-2 group"
            >
              Back to my path
              <ArrowRight className="w-5 h-5 rotate-180 group-hover:translate-x-[-4px] transition-transform" />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
