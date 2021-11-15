import React, {useState} from 'react';
import './App.css';
import Challenge2 from './Challenge2';
import Challenge1 from './Challenge1';
import FlipSwitch from './components/ui/FlipSwitch';

const App = () => {
const [isChallenge1, setIsChallenge1] = useState(true);

  return (
    <div className="App">

      <FlipSwitch 
        isOn={isChallenge1}
        setisOn={setIsChallenge1}
        label={'Challenge'}
      />

      {(isChallenge1)
        ? <Challenge1 />
        : <Challenge2 />
      }
    </div>
  );
}

export default App;
