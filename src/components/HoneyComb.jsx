import LetterButton from './LetterButton'


const HoneyComb = (props) => {
  const handleClick = (e) => {
    document.querySelector(".form-control-updated").value += e.target.outerText;
  }
  const shuffle = () => {
    console.log('shuffling')
    // const centerLetter = props.letters[0][7]
    // gon.letters.sort(() => (Math.random() > .5) ? 1 : -1);
  }
  const deleting = () => {
    document.querySelector(".form-control-updated").value = document.querySelector(".form-control-updated").value.slice(0, -1)
  }

  return(
    <>
      <div id="form-div">
          <form>
            <input className="form-control-updated" type="text" placeholder="Type or Click" aria-label="Search">
            </input>
          </form>
      </div>
      <div id="honeycomb">
        <div className="row justify-content-center">
          <div className="hex-parent">
            <p className="hex">&#x2B22;</p>
            <button className="letter-btn" onClick={handleClick}>{props.letters[0][6]}</button>
          </div>
          <div className="hex-parent">
            <p className="hex">&#x2B22;</p>
            <button className="letter-btn" onClick={handleClick}>{props.letters[0][5]}</button>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="hex-parent">
            <p className="hex">&#x2B22;</p>
            <button className="letter-btn" onClick={handleClick}>{props.letters[0][0]}</button>
          </div>
          <div className="hex-parent">
            <p className="hex hex-center">&#x2B22;</p>
            <button className="letter-btn" onClick={handleClick}>{props.letters[0][1]}</button>
          </div>
          <div className="hex-parent">
            <p className="hex">&#x2B22;</p>
            <button className="letter-btn" onClick={handleClick}>{props.letters[0][2]}</button>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="hex-parent">
            <p className="hex">&#x2B22;</p>
            <button className="letter-btn" onClick={handleClick}>{props.letters[0][3]}</button>
          </div>
          <div className="hex-parent">
            <p className="hex">&#x2B22;</p>
            <button className="letter-btn" onClick={handleClick}>{props.letters[0][4]}</button>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <button type="button" className="btn btn-light bw-delete-btn" onClick={deleting}>Delete</button>
        <button type="button" className="btn btn-light bw-shuffle-btn" onClick={shuffle}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-repeat"
            viewBox="0 0 16 16">
            <path
              d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z" />
            <path fill-rule="evenodd"
              d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z" />
          </svg>
        </button>
        <button type="button" className="btn btn-light bw-enter-btn">Enter</button>
      </div>
    </>
  )
}


export default HoneyComb
