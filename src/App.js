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

function App() {
 const [letters, setLetters] = useState("");
 const [words, setWords] = useState({});
 const [foundWords, setFoundWords] = useState([]);
 const [lastWord, setLastWord] = useState();

  useEffect(() => {
    requestLetters();
  }, []);

  async function requestLetters() {
    const res = await fetch(API_URL);
    const json = await res.json();
    setLetters(json[0]["letters"]);
    setWords(json[0]["words"])
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let wordArray = foundWords
    let foundWord = document.querySelector("input.form-control-updated").value
    if (Object.keys(words).includes(foundWord)) {
      wordArray.push(foundWord)
      setFoundWords(wordArray)
      setLastWord(foundWord)
    }else{
      alert("Word does not exist")
    }
    document.querySelector("input.form-control-updated").value=""
  }

  useEffect(() => {
    // run a check on the existing words.
    console.log(foundWords)
  },[lastWord]);

  // console.log(letters)
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
            <form onSubmit={handleSubmit}>
              <input className="form-control-updated" type="text" placeholder="Type or Click" aria-label="Search">
              </input>
            </form>
          </div>
          < HoneyComb letters={letters}/>
          {/* results table */}
          <ResultsTable letters={letters} words={words}/>
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
            {foundWords.map(word => <FoundWordCard word={word} shortdef={words[word]} key={word}/>)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
