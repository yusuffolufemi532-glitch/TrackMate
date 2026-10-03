import { useState } from 'react';
import { Welcome } from './components/Welcome';
import { Onboarding } from './components/Onboarding';
import { PathResult } from './components/PathResult';
import { Explore } from './components/Explore';
import type { OnboardingSelections } from './data/pathData';

type Screen = 'welcome' | 'onboarding' | 'result' | 'explore';

function App() {
  const [screen, setScreen] = useState<Screen>('welcome');
  const [selections, setSelections] = useState<OnboardingSelections | null>(null);

  const handleStart = () => setScreen('onboarding');

  const handleOnboardingComplete = (s: OnboardingSelections) => {
    setSelections(s);
    setScreen('result');
  };

  const handleRestart = () => {
    setSelections(null);
    setScreen('welcome');
  };

  const handleExplore = () => setScreen('explore');

  const handleBackToResult = () => setScreen('result');

  if (screen === 'welcome') {
    return <Welcome onStart={handleStart} />;
  }

  if (screen === 'onboarding') {
    return <Onboarding onComplete={handleOnboardingComplete} onBack={() => setScreen('welcome')} />;
  }

  if (screen === 'result' && selections) {
    return (
      <PathResult
        selections={selections}
        onRestart={handleRestart}
        onExplore={handleExplore}
      />
    );
  }

  if (screen === 'explore' && selections) {
    return (
      <Explore
        selections={selections}
        onBack={handleBackToResult}
        onRestart={handleRestart}
      />
    );
  }

  return <Welcome onStart={handleStart} />;
}

export default App;
