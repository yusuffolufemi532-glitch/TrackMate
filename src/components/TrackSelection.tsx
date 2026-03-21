import { ArrowLeft } from 'lucide-react';
import { ProgressBar } from './ProgressBar';

interface TrackSelectionProps {
  track: string;
  onConfirm: (level: string) => void;
  onBack: () => void;
}

const trackDetails: Record<string, { name: string; color: string }> = {
  web: { name: 'Web Development', color: 'from-blue-500 to-blue-600' },
  mobile: { name: 'Mobile Development', color: 'from-emerald-500 to-emerald-600' },
  data: { name: 'Data Science', color: 'from-orange-500 to-orange-600' },
  design: { name: 'UI/UX Design', color: 'from-rose-500 to-rose-600' },
};

const roadmaps: Record<string, { week: number; title: string }[]> = {
  web: [
    { week: 1, title: 'HTML & CSS Basics' },
    { week: 2, title: 'JavaScript Fundamentals' },
    { week: 3, title: 'Build Your First Project' },
  ],
  mobile: [
    { week: 1, title: 'Mobile Development Intro' },
    { week: 2, title: 'Navigation & State' },
    { week: 3, title: 'First Mobile App' },
  ],
  data: [
    { week: 1, title: 'Python & Data Basics' },
    { week: 2, title: 'Data Analysis' },
    { week: 3, title: 'First Analysis Project' },
  ],
  design: [
    { week: 1, title: 'Design Principles' },
    { week: 2, title: 'UI Design Tools' },
    { week: 3, title: 'Design Your First App' },
  ],
};

const levels = [
  { id: 'beginner', name: 'Beginner', description: 'Just getting started' },
  { id: 'intermediate', name: 'Intermediate', description: 'Have some experience' },
  { id: 'advanced', name: 'Advanced', description: 'Looking to master' },
];

export function TrackSelection({ track, onConfirm, onBack }: TrackSelectionProps) {
  const trackInfo = trackDetails[track];
  const roadmap = roadmaps[track] || [];
  const progress = 0;

  const handleSelectLevel = (levelId: string) => {
    onConfirm(levelId);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <header className={`bg-gradient-to-r ${trackInfo?.color} text-white sticky top-0 z-10`}>
        <div className="max-w-3xl mx-auto px-4 py-6">
          <button
            onClick={onBack}
            className="flex items-center gap-2 mb-4 opacity-90 hover:opacity-100 transition-opacity"
          >
            <ArrowLeft className="w-5 h-5" />
            Back
          </button>
          <h1 className="text-3xl font-bold mb-2">{trackInfo?.name}</h1>
          <p className="text-white/80">Select your experience level to get started</p>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-6">Your Learning Roadmap</h2>
            <div className="space-y-3">
              {roadmap.map((week) => (
                <div key={week.week} className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`bg-gradient-to-r ${trackInfo?.color} text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold`}>
                      {week.week}
                    </div>
                    <h3 className="font-semibold text-slate-900">Week {week.week}</h3>
                  </div>
                  <p className="text-slate-600 text-sm ml-11">{week.title}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-slate-600">Your Progress</span>
                <span className="text-sm font-semibold text-slate-900">0/27 tasks</span>
              </div>
              <ProgressBar progress={progress} />
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-6">Select Your Level</h2>
            <div className="space-y-3">
              {levels.map((level) => (
                <button
                  key={level.id}
                  onClick={() => handleSelectLevel(level.id)}
                  className={`w-full p-4 rounded-xl border-2 transition-all text-left hover:shadow-md ${
                    'border-slate-200 bg-white hover:border-emerald-300'
                  }`}
                >
                  <div className="font-semibold text-slate-900 mb-1">
                    {level.name}
                  </div>
                  <div className="text-sm text-slate-600 mb-3">
                    {level.description}
                  </div>
                  <div className="inline-flex items-center gap-1 text-emerald-600 text-sm font-medium">
                    Start Learning
                    <span>→</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
