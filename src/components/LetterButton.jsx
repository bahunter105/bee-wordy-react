const LetterButton = (props) => {

  const handleClick = (e) => {
    console.log(e.target.outerText);
  }

  return <button className="letter-btn" onClick={handleClick}>{props.letter}</button>;
}


export default LetterButton
