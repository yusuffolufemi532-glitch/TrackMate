import {
  ArrowLeft,
  ArrowRight,
  Sparkles,
  Cpu,
  GraduationCap,
  Lightbulb,
  Target,
  MapPin,
  Info,
  RefreshCw,
} from 'lucide-react';
import { StepIndicator } from './StepIndicator';
import { generatePath, type OnboardingSelections } from '../data/pathData';

interface PathResultProps {
  selections: OnboardingSelections;
  onRestart: () => void;
  onExplore: () => void;
}

export function PathResult({ selections, onRestart, onExplore }: PathResultProps) {
  const path = generatePath(selections);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <header className="bg-white border-b border-slate-200 px-5 py-4 sticky top-0 z-10">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-3">
            <button
              onClick={onRestart}
              className="flex items-center gap-1.5 text-slate-500 hover:text-slate-800 text-sm font-medium transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Start over
            </button>
            <button
              onClick={onRestart}
              className="flex items-center gap-1.5 text-slate-400 hover:text-slate-600 text-sm transition-colors"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              Redo
            </button>
          </div>
          <StepIndicator currentStep={2} maxStep={4} />
        </div>
      </header>

      <main className="flex-1 px-5 py-6">
        <div className="max-w-2xl mx-auto space-y-5">
          {/* Hero result card */}
          <div className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl p-6 text-white shadow-lg shadow-teal-500/20 animate-[fadeIn_0.5s_ease-out]">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-5 h-5" />
              <span className="text-sm font-medium text-teal-50">Your TrackMate Path</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold mb-3 leading-tight">{path.title}</h1>
            <p className="text-teal-50 leading-relaxed text-[15px]">{path.explanation}</p>
          </div>

          {/* Technology Connections */}
          <section className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 animate-[fadeIn_0.6s_ease-out]">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center">
                <Cpu className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h2 className="font-bold text-slate-900">Technology Connections</h2>
                <p className="text-xs text-slate-500">How technology connects to your path</p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {path.techConnections.map((conn) => (
                <div key={conn.title} className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                  <h3 className="font-semibold text-slate-800 text-sm mb-1">{conn.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{conn.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Starter Skills */}
          <section className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 animate-[fadeIn_0.7s_ease-out]">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-lg bg-amber-50 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-amber-600" />
              </div>
              <div>
                <h2 className="font-bold text-slate-900">Starter Skills</h2>
                <p className="text-xs text-slate-500">Skills to begin building now</p>
              </div>
            </div>
            <div className="space-y-2.5">
              {path.starterSkills.map((skill) => (
                <div key={skill.title} className="flex items-start gap-3 p-3 rounded-lg bg-slate-50">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center mt-0.5">
                    <Target className="w-3.5 h-3.5 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800 text-sm">{skill.title}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed mt-0.5">{skill.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Try This */}
          <section className="bg-gradient-to-br from-orange-50 to-orange-50/50 rounded-2xl border border-orange-200 shadow-sm p-5 animate-[fadeIn_0.8s_ease-out]">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-9 h-9 rounded-lg bg-orange-100 flex items-center justify-center">
                <Lightbulb className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <h2 className="font-bold text-slate-900">Try This</h2>
                <p className="text-xs text-slate-500">A small first step you can take today</p>
              </div>
            </div>
            <h3 className="font-semibold text-slate-800 text-base mb-1.5">{path.tryThis.title}</h3>
            <p className="text-sm text-slate-600 leading-relaxed">{path.tryThis.description}</p>
          </section>

          {/* Opportunities */}
          <section className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 animate-[fadeIn_0.9s_ease-out]">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-lg bg-teal-50 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-teal-600" />
              </div>
              <div>
                <h2 className="font-bold text-slate-900">Opportunities</h2>
                <p className="text-xs text-slate-500">Programmes and challenges to explore</p>
              </div>
            </div>

            <div className="flex items-start gap-2 mb-4 p-3 rounded-lg bg-amber-50 border border-amber-100">
              <Info className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
              <p className="text-xs text-amber-800 leading-relaxed">
                These are example opportunities for demonstration. They are not real current listings. Real opportunities will be added in a future update.
              </p>
            </div>

            <div className="space-y-3">
              {path.opportunities.map((opp) => (
                <div key={opp.title} className="p-4 rounded-xl border border-slate-200 hover:border-teal-300 transition-colors">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-slate-800 text-sm">{opp.title}</h3>
                    <span className="flex-shrink-0 text-[10px] font-bold uppercase tracking-wide text-teal-600 bg-teal-50 px-2 py-1 rounded-full">
                      {opp.type}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed mb-2">{opp.description}</p>
                  <div className="flex items-center gap-1 text-xs text-slate-400">
                    <MapPin className="w-3 h-3" />
                    {opp.location}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Next Step CTA */}
          <div className="pt-2 pb-4">
            <button
              onClick={onExplore}
              className="w-full bg-slate-900 text-white py-4 rounded-xl font-semibold text-lg hover:bg-slate-800 active:scale-[0.98] transition-all shadow-md flex items-center justify-center gap-2 group animate-[fadeIn_1s_ease-out]"
            >
              Explore your pathway
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="text-center text-xs text-slate-400 mt-3">
              This is your starting point, not a final destination. Keep exploring.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
