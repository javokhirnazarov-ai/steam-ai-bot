import React, { useState } from 'react';
import { SmartOnboarding, Dashboard, AdaptiveInterface, GestureInterface } from './UIPages';

function App() {
  const [currentInterface, setCurrentInterface] = useState('onboarding');

  const renderInterface = () => {
    switch (currentInterface) {
      case 'onboarding':
        return <SmartOnboarding onComplete={setCurrentInterface} />;
      case 'gesture':
        return <GestureInterface onSwitch={setCurrentInterface} />;
      case 'voice':
        return <AdaptiveInterface onSwitch={setCurrentInterface} mode="voice" />;
      case 'audio':
        return <AdaptiveInterface onSwitch={setCurrentInterface} mode="audio" />;
      case 'standard':
        return <Dashboard onSwitch={setCurrentInterface} />;
      default:
        return <SmartOnboarding onComplete={setCurrentInterface} />;
    }
  };

  return (
    <div className="app-container">
      {renderInterface()}
    </div>
  );
}

export default App;
