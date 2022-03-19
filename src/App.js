import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import HoneyComb from './components/HoneyComb'
import ResultsTable from './components/ResultsTable'
import FoundWordCard from './components/FoundWordCard'
import { useEffect, useState } from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

// const API_URL = "http://localhost:4567/20220215"
const API_URL = "https://bee-sinatra-api.herokuapp.com/"
// const API_URL = "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json"

function App() {
 const [letters, setLetters] = useState("");
 const [words, setWords] = useState({});

useEffect(() => {
  requestLetters();
}, []);

async function requestLetters() {
  const res = await fetch(API_URL);
  const json = await res.json();
  setLetters(json[0]["letters"]);
  setWords(json[0]["words"])
}
  console.log(letters)
  console.log(words)
  return (
    <div className="container" id="app-box">
      <div className="row" id="inner-app-box">
        <div className="container col-6" id="game-box">
          <div>
            <p>Please type a day:</p>
            <DayPickerInput onDayChange={day => console.log(day)} />
          </div>
          {/* honeycomb */}
          <div id="form-div">
            <form>
              <input className="form-control-updated" type="text" placeholder="Type or Click" aria-label="Search">
              </input>
            </form>
          </div>
          < HoneyComb letters={letters}/>
          {/* results table */}
          <ResultsTable/>
        </div>
        <div className="h-100" id="result-box">
          <div id="rank-div">
            <h5>Rank: </h5>
            <div className="progress">
              <div className="progress-bar progress-bar-striped bg-warning" id= "pbar" role="progressbar"
                aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>
          {/* Found Words Box */}
          <div className="container border" id="inner-results-box">
            <FoundWordCard word="whiff" shortdef="a quick puff or slight gust especially of air, odor, gas, smoke, or spray"/>
          </div>
        </div>
      </div>
    </div>



  );
}

export default App;
