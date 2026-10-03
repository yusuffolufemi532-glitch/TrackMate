import { Compass, Sparkles, ArrowRight } from 'lucide-react';

interface WelcomeProps {
  onStart: () => void;
}

export function Welcome({ onStart }: WelcomeProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-teal-50/30 to-slate-50 flex items-center justify-center px-5 py-10">
      <div className="max-w-md mx-auto w-full">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-teal-500 text-white mb-6 shadow-lg shadow-teal-500/20 animate-[fadeIn_0.6s_ease-out]">
            <Compass className="w-8 h-8" />
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-3 animate-[fadeIn_0.7s_ease-out]">
            Welcome to TrackMate
          </h1>

          <p className="text-lg font-medium text-teal-600 mb-4 animate-[fadeIn_0.8s_ease-out]">
            Let's discover what your future could look like.
          </p>

          <p className="text-slate-600 leading-relaxed text-[15px] animate-[fadeIn_0.9s_ease-out]">
            Tell me what interests you. I'll help you discover how technology, skills and opportunities can connect to your journey.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 mb-8 animate-[fadeIn_1s_ease-out]">
          <div className="flex items-start gap-3 mb-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-50 flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-teal-600" />
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-800">How it works</p>
              <p className="text-sm text-slate-500 mt-0.5">
                Answer 3 quick questions. Get a personalized pathway showing how your interests connect to technology and opportunities.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span className="font-medium">Takes about 2 minutes</span>
            <span>•</span>
            <span>No sign-up needed</span>
          </div>
        </div>

        <button
          onClick={onStart}
          className="w-full bg-teal-500 text-white py-4 rounded-xl font-semibold text-lg hover:bg-teal-600 active:scale-[0.98] transition-all shadow-lg shadow-teal-500/20 flex items-center justify-center gap-2 group animate-[fadeIn_1.1s_ease-out]"
        >
          Start my journey
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>

        <p className="text-center text-xs text-slate-400 mt-6 animate-[fadeIn_1.2s_ease-out]">
          TrackMate doesn't decide your career for you. It helps you discover possibilities.
        </p>
      </div>
    </div>
  );
}
