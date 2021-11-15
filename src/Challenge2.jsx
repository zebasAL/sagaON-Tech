import React, {useState} from 'react';
import CSVReader from 'react-csv-reader';
import CsvDownloader from 'react-csv-downloader';
import './App.css';
import InputFIeld from './components/ui/InputFIeld';

const Challenge2 = () => {
const [endGameResults, setEndGameResults] = useState(null);

/**
 * Handle uploadedFile data
 * @param {Array} data 
 * @returns {void} 
 */
const handleUploadedFile = (data) => {
  //Set how many rounds were played and each result
  const rounds = data[0];
  const resultsPerRound = data.slice(1, rounds + 1)

  //Set validation requirement
  if (rounds <= 10000 ) {

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

    //Merges the arrays of winners and points in order to have a new array with both information
    setEndGameResults(winner.map((win, index) => [win, victoryPoints[index]]))

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
        disabled={endGameResults === null}
        filename="results"
        extension=".csv"
        text="Download results"
        datas={endGameResults}
      />

      <a
        className="sample-downloader"
        download
        href="/test-challenge2.csv"
      >
        Download sample CSV file
      </a>

    </div>
  );
}

export default Challenge2;
