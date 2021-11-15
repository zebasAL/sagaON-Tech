import React, {useState} from 'react';
import CSVReader from 'react-csv-reader';
import CsvDownloader from 'react-csv-downloader';
import './App.css';
import {handlesMatchedValues} from './utilities';
import InputFIeld from './components/ui/InputFIeld';

const Challenge1 = () => {
const [firstInstructionResult, setFirstInstructionResult] = useState(null);
const [secondInstructionResult, setSecondInstructionResult] = useState(null);

const dataResults = [{
  firstInstruction: firstInstructionResult,
  secondInstruction: secondInstructionResult
}];

/**
 * Handle uploadedFile data
 * @param {Array} data 
 * @returns {void} 
 */
const handleUploadedFile = (data) => {
  //Set Entry values
  const [charactersLength, firstInstruction, secondInstruction, message] = data;

  //Gets the separated values ​​by whitespace
  const [firstInstructionLength, secondInstructionLength, messageLength] = charactersLength.toString().split(/\s+/);

  //Sets validation requirements
  if (charactersLength && firstInstruction && secondInstruction && message
    && (messageLength >= 3 && messageLength <= 5000)
    && (firstInstructionLength >= 2 && firstInstructionLength <= 50)
    && (secondInstructionLength >= 2 && secondInstructionLength <= 50)) {
      setFirstInstructionResult(handlesMatchedValues(firstInstruction.toString(), message.toString()));
      setSecondInstructionResult(handlesMatchedValues(secondInstruction.toString(), message.toString()));
  } else {

    // reset input field when file doesn't match requeriments
    alert('file data  does not match requeriments');
    document.querySelector('#react-csv-reader-input').value = '';
  }
}

  return (
    <div className="App-header">

      <CSVReader 
        id="csv-reader"
        onFileLoaded={(data) => handleUploadedFile(data)}
      />

      <InputFIeld
        className="csv-input"
        type="text"
        value={(document.querySelector('#react-csv-reader-input'))
          ? document.querySelector('#react-csv-reader-input').value
          : 'Drag your CSV file with requested format'
        }
      />
      
      <CsvDownloader
        className="csv-downloader"
        disabled={firstInstructionResult === null || secondInstructionResult === null}
        filename="results"
        extension=".csv"
        datas={dataResults}
        text="Download results"
      />

      <a
        className="sample-downloader"
        download
        href="/test-challenge1.csv"
      >
        Download sample CSV file
      </a>

    </div>
  );
}

export default Challenge1;
