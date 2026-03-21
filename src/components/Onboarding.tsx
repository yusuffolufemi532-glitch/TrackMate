import { useState } from 'react';
import { BookOpen, Zap, Code, Rocket } from 'lucide-react';

interface OnboardingProps {
  onTrackSelected: (track: string) => void;
}

const tracks = [
  { id: 'web', name: 'Web Development', icon: Code, color: 'bg-blue-500' },
  { id: 'mobile', name: 'Mobile Development', icon: Rocket, color: 'bg-emerald-500' },
  { id: 'data', name: 'Data Science', icon: Zap, color: 'bg-orange-500' },
  { id: 'design', name: 'UI/UX Design', icon: BookOpen, color: 'bg-rose-500' },
];

export function Onboarding({ onTrackSelected }: OnboardingProps) {
  const [selectedTrack, setSelectedTrack] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 px-4 py-8">
      <div className="max-w-md mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">
            Welcome to TrackMate
          </h1>
          <h2 className="text-xl font-semibold text-slate-900 mb-3">
            Let's find your path
          </h2>
          <p className="text-slate-600">I'll guide you step by step. We're in this together.</p>
        </div>

        <div className="space-y-3">
          {tracks.map((track) => {
            const Icon = track.icon;
            return (
              <button
                key={track.id}
                onClick={() => {
                  setSelectedTrack(track.id);
                  onTrackSelected(track.id);
                }}
                className={`w-full p-4 rounded-xl border-2 transition-all cursor-pointer ${
                  selectedTrack === track.id
                    ? 'border-emerald-500 bg-emerald-50 shadow-md'
                    : 'border-slate-200 bg-white hover:border-emerald-300 hover:shadow-sm'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`${track.color} p-3 rounded-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left">
                    <span className="text-lg font-medium text-slate-900 block">
                      {track.name}
                    </span>
                    <span className="text-sm text-slate-500">Choose this track →</span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
