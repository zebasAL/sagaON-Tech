import React, {useState} from 'react';
import CSVReader from 'react-csv-reader';
import CsvDownloader from 'react-csv-downloader';
import './App.css';
import { rulesChallenge2 } from './utilities';
import InputFIeld from './components/ui/InputFIeld';

const Challenge2 = () => {
const [gameResults, setGameResults] = useState([]);
const [roundResults, setRoundResults] = useState([]);

const results = [];
results.push(gameResults);
roundResults.map((value) => results.push(value));

const dataResults = results;

/**
 * Handle uploadedFile data
 * @param {Array} data 
 * @returns {void} 
 */
const handleUploadedFile = (fileData, fileInfo) => {
   //Get Entry values from text file
   const data = []
   fileData.map((value) => data.push(value[0]));

  //Set how many rounds were played and each result
  const rounds = data[0];
  const resultsPerRound = data.slice(1, rounds + 1)

  //Set validation requirement
  if (fileInfo.type !== 'text/plain') {
    alert('Uploaded file is not a text file');
  } else if (rounds <= 10000 && (parseInt(rounds) === resultsPerRound.length) && (resultsPerRound.map((value) => value.split(' ').length === 2).every((item) => (item === true)))) {
    
    let victoryPoints = [];
    const winner = [];
    let gap = 0;

    //Set 2 arrays, one with the winners and a second one with victory points
    resultsPerRound.forEach((result, index) => 
      victoryPoints.push(result.toString().split(' ').reduce((a,b) => {
        return gap += (a-b)
      }))
      && winner.push((gap < 0) ? 2 : 1)
    )

    //Change the difference of players points to absolute value
    victoryPoints = victoryPoints.map(Math.abs);

    //Set the winner and acomulated points
    setGameResults([`winning player ${winner[rounds - 1]}`, `winning points ${victoryPoints[rounds - 1]}`])

    //Gets results of all acomulated rounds
    const roundResults = (winner.map((win, index) => [win, victoryPoints[index]]))
    roundResults.unshift(['Rounds Results:'])
    setRoundResults(roundResults)

  } else {
    alert(` Unvalid data, please follow the next steps: ${rulesChallenge2()}`);
  }
  // reset input field when file doesn't match requeriments
  document.querySelector('#react-csv-reader-input').value = '';
}

  return (
    <div className="App-header">

      <CSVReader 
        id="file-reader"
        onError={() => alert('Ops, something went wrong, try again')}
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
        disabled={gameResults.length === 0}
        filename="results"
        extension=".txt"
        text="Download results"
        datas={dataResults}
      />

      <a
        className="sample-downloader"
        download
        href="/test-challenge2.txt"
      >
        Download sample Text file
      </a>

    </div>
  );
}

export default Challenge2;
