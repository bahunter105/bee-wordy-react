import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import HoneyComb from './components/HoneyComb'
import ResultsTable from './components/ResultsTable'
import FoundWordCard from './components/FoundWordCard'
import { useEffect, useState } from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
 const [apiUrl, setApiURL] = useState("https://bee-sinatra-api.herokuapp.com/");
 const [letters, setLetters] = useState("");
 const [words, setWords] = useState({});
 const [foundWords, setFoundWords] = useState([]);
 const [lastWord, setLastWord] = useState();
//  const [typedLetter,setTypedLetter] = useState("");

  useEffect(() => {
    requestLetters();
  }, [setApiURL]);

  useEffect(() => {
    document.addEventListener("keyup", e => {
      let typedLetter = e.key
      console.log(typedLetter)
    });
  },[]);

  // useEffect(() => {
  //   if(letters.includes(typedLetter)){
  //     document.querySelector(".form-control-updated").value += typedLetter
  //   }  }, [typedLetter]);

  async function requestLetters() {
    const res = await fetch(apiUrl);
    const json = await res.json();
    setLetters(json[0]["letters"]);
    setWords(json[0]["words"])
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let wordArray = foundWords
    let foundWord = document.querySelector("input.form-control-updated").value
    if(foundWords.includes(foundWord)){
      toast("Sorry 🥲 You found that word already!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    }else if (Object.keys(words).includes(foundWord)) {
      wordArray.push(foundWord)
      setFoundWords(wordArray)
      setLastWord(foundWord)
      progressUpdate()
      if(letters.split("").map( letter => foundWord.includes(letter)).includes(false)){
        toast("Boom! 🔥 You found a word!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
        }else{
        toast("You're super 🦸‍♂️ you just found a PANGRAM!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
      }
    }else{
      toast("Sorry 🧐 Don't think that word exist!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    }
    document.querySelector("input.form-control-updated").value=""
  }

  const progressUpdate = () => {
    let perdone = (foundWords.length / Object.keys(words).length) * 100
    let rank = ""
    if (perdone < 16) {
      rank = "Beginner";
    } else if (perdone >= 16 && perdone < 32) {
      rank = "Good"
    } else if (perdone >= 32 && perdone < 48) {
      rank = "Solid";
    } else if (perdone >= 48 && perdone < 64) {
      rank = "Great";
    } else if (perdone >= 64 && perdone < 80) {
      rank = "Amazing";
    } else if (perdone >= 80) {
      rank = "Genius";
    }
    document.querySelector('#pbar').style.width = `${perdone}%`
    document.querySelector("#rank-div h5").innerHTML = `Rank: ${rank}`
  }
  // useEffect(() => {
  //   // run a check on the existing words.
  //   console.log(foundWords)
  // },[lastWord]);

  // console.log(letters)
  // console.log(words)
  // document.querySelector(".form-control-updated").value += e.target.outerText;


  return (
    <div className="container" id="app-box">
      <div>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        {/* Same as */}
        <ToastContainer />
      </div>
      <div className="row" id="inner-app-box">
        <div className="container col-6" id="game-box">
          <div>
            <p>Please type a day:</p>
            <DayPickerInput onDayChange={day =>   setApiURL(`https://bee-sinatra-api.herokuapp.com/${new Date(day).toISOString().replace('-', '').split('T')[0].replace('-', '')}`)} />
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
