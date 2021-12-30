import React, {useState} from 'react';
import './App.css';
import './mobile.css';
import Challenge3 from './Challenge3';
import Challenge2 from './Challenge2';
import Challenge1 from './Challenge1';
import FlipSwitch from './components/ui/FlipSwitch';

const App = () => {
  const [challenge, setChallenge] = useState({ marginLeft: '0px', number: 1 });
  const selectChallenge = () => {
    switch (challenge.number) {
      case 1:
        return <Challenge1 />;
      case 2:
        return <Challenge2 />;
      case 3:
        return <Challenge3 />;
      default:
        return <Challenge1 />;
    }
  }
  return (
    <div className="App">
      <FlipSwitch 
        challenge={challenge}
        setChallenge={setChallenge}
        label={'Challenge'}
      />
      {selectChallenge()}
    </div>
  );
}

export default App;
