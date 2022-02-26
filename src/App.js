import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Hello from './components/Hello'
import LetterButton from './components/LetterButton'
import HoneyComb from './components/HoneyComb'
import ResultsTable from './components/ResultsTable'
import FoundWordCard from './components/FoundWordCard'
import { useEffect, useState } from 'react';

// const API_URL = "http://localhost:4567/20220215"
// const API_URL = "https://bee-sinatra-api.herokuapp.com/"
// const API_URL = "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json"

function App() {
 const [letters, setLetters] = useState([]);

 useEffect(() => {
   fetch("http://localhost:4567/20220215")
     .then((data) => data.json())
     .then((json) => setLetters(json));
  },[]);

  // console.log(letters)
  // const ltrs = letters[0].letters
  // console.log(ltrs)
  return (
    <div className="container" id="app-box">
      <div className="row" id="inner-app-box">
        <div className="container col-6" id="game-box">
          <div id="form-div">
              <form>
                <input className="form-control-updated" type="text" placeholder="Type or Click" aria-label="Search">
                </input>
              </form>
          </div>
          {/* honeycomb */}
          <div><p>
            {/* h */}
            {/* {ltrs} */}
            {/* {letters[0].letters} */}
          </p></div>
          < HoneyComb letters="abcdefd"/>
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
