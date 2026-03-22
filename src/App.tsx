import { useState } from 'react';
import { Onboarding } from './components/Onboarding';
import { TrackSelection } from './components/TrackSelection';
import { Dashboard } from './components/Dashboard';

function App() {
  const [screen, setScreen] = useState<'onboarding' | 'track-selection' | 'dashboard'>('onboarding');
  const [userTrack, setUserTrack] = useState('');
  const [userLevel, setUserLevel] = useState('');

  const handleTrackSelected = (track: string) => {
    setUserTrack(track);
    setScreen('track-selection');
  };

  const handleTrackConfirmed = (level: string) => {
    setUserLevel(level);
    setScreen('dashboard');
  };

  const handleBackToOnboarding = () => {
    setScreen('onboarding');
  };

  const handleBackToTrackSelection = () => {
    setScreen('track-selection');
  };

  if (screen === 'onboarding') {
    return <Onboarding onTrackSelected={handleTrackSelected} />;
  }

  if (screen === 'track-selection') {
    return <TrackSelection track={userTrack} onConfirm={handleTrackConfirmed} onBack={handleBackToOnboarding} />;
  }

  return <Dashboard track={userTrack} level={userLevel} onBack={handleBackToTrackSelection} />;
}

export default App;
