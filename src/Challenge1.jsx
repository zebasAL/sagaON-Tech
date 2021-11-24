import React, {useState} from 'react';
import CSVReader from 'react-csv-reader';
import CsvDownloader from 'react-csv-downloader';
import './App.css';
import {handlesMatchedValues, rulesChallenge1} from './utilities';
import InputFIeld from './components/ui/InputFIeld';

const Challenge1 = () => {
const [firstInstructionResult, setFirstInstructionResult] = useState(null);
const [secondInstructionResult, setSecondInstructionResult] = useState(null);

const dataResults = [
  [`first instruction: ${firstInstructionResult}`],
  [`second instruction: ${secondInstructionResult}`]
];

/**
 * Handle uploadedFile data
 * @param {Array} data 
 * @returns {void} 
 */
const handleUploadedFile = (fileData, fileInfo) => {
  //Get Entry values from text file
  const data = []
  fileData.map((value) => data.push(value[0]));

  //Set every row value
  const [charactersLength, firstInstruction, secondInstruction, message] = [...data];

  //Gets the separated values ​​by whitespace
  const [firstInstructionLength, secondInstructionLength, messageLength] = charactersLength.toString().split(/\s+/);

  //Sets validation requirements
   if (fileInfo.type !== 'text/plain') {
    alert('Uploaded file is not a text file');
   } else if (data.length === 4
    && (messageLength >= 3 && messageLength <= 5000 && parseInt(messageLength) === message.length)
    && (firstInstructionLength >= 2 && firstInstructionLength <= 50 && parseInt(firstInstructionLength) === firstInstruction.length)
    && (secondInstructionLength >= 2 && secondInstructionLength <= 50 && parseInt(secondInstructionLength) === secondInstruction.length)) {
      setFirstInstructionResult(handlesMatchedValues(firstInstruction.toString(), message.toString()));
      setSecondInstructionResult(handlesMatchedValues(secondInstruction.toString(), message.toString()));
  } else {
    alert(`Unvalid data, please follow the next steps: ${rulesChallenge1()}`);
  }
  // reset input field when file doesn't match requeriments
  document.querySelector('#react-csv-reader-input').value = '';
}

  return (
    <div className="App-header">

      <CSVReader  
        id="file-reader"
        onError={() => alert('Oops, something went wrong, try again')}
        accept="text/plain"
        onFileLoaded={(fileData, fileInfo) => handleUploadedFile(fileData, fileInfo)}
      />

      <InputFIeld
        type="text"
        value={(document.querySelector('#react-csv-reader-input'))
          ? document.querySelector('#react-csv-reader-input').value
          : 'Drag your Text file with requested format'
        }
      />
      
      <CsvDownloader
        className="file-downloader"
        disabled={firstInstructionResult === null || secondInstructionResult === null}
        filename="results"
        extension=".txt"
        datas={dataResults}
        text="Download results"
      />

      <a
        className="sample-downloader"
        download
        href="/test-challenge1.txt"
      >
        Download sample Text file
      </a>

    </div>
  );
}

export default Challenge1;
