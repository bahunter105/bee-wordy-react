import { useState, useEffect } from 'react';


const HoneyComb = (props) => {
  const [gameLetters, setGameLetters] = useState(props.letters);
  // const [gameLetters, setGameLetters] = useState("cwelome");

  useEffect(() => {
    // Update the gameLetters after the Fetch works in App.js
    setGameLetters(props.letters)
  },[props.letters]);

  const shuffle = () => {
    const newLetterArray = [...gameLetters]
    const centerLetter = newLetterArray.shift()
    newLetterArray.sort(() => (Math.random() > .5) ? 1 : -1);
    newLetterArray.unshift(centerLetter)
    setGameLetters(newLetterArray.join(""))
  }
  const deleting = () => {
    document.querySelector(".form-control-updated").value = document.querySelector(".form-control-updated").value.slice(0, -1)
  }
  const letterClick = (e) => {
    document.querySelector(".form-control-updated").value += e.target.outerText;
  }
  const submitClick = (e) => {
    document.querySelector("form").requestSubmit();
  }


  return(
    <>
      <div id="honeycomb">
        <div className="row justify-content-center">
          <div className="hex-parent">
            <p className="hex">&#x2B22;</p>
            <button className="letter-btn" onClick={letterClick}>{gameLetters[1]}</button>
          </div>
          <div className="hex-parent">
            <p className="hex">&#x2B22;</p>
            <button className="letter-btn" onClick={letterClick}>{gameLetters[2]}</button>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="hex-parent">
            <p className="hex">&#x2B22;</p>
            <button className="letter-btn" onClick={letterClick}>{gameLetters[3]}</button>
          </div>
          <div className="hex-parent">
            <p className="hex hex-center">&#x2B22;</p>
            <button className="letter-btn" onClick={letterClick}>{gameLetters[0]}</button>
          </div>
          <div className="hex-parent">
            <p className="hex">&#x2B22;</p>
            <button className="letter-btn" onClick={letterClick}>{gameLetters[4]}</button>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="hex-parent">
            <p className="hex">&#x2B22;</p>
            <button className="letter-btn" onClick={letterClick}>{gameLetters[5]}</button>
          </div>
          <div className="hex-parent">
            <p className="hex">&#x2B22;</p>
            <button className="letter-btn" onClick={letterClick}>{gameLetters[6]}</button>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <button type="button" className="btn btn-light bw-delete-btn" onClick={deleting}>Delete</button>
        <button type="button" className="btn btn-light bw-shuffle-btn" onClick={shuffle}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-repeat shuf-sign"
            viewBox="0 0 16 16">
            <path
              d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z" />
            <path fillRule="evenodd"
              d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z" />
          </svg>
        </button>
        <button type="button" className="btn btn-light bw-enter-btn" onClick={submitClick}>Enter</button>
      </div>
    </>
  )
}


export default HoneyComb
