const LetterButton = (props) => {

  const handleClick = () => {
    console.log("hello");
  }

  return <button className="letter-btn" onClick={handleClick}>{props.letter}</button>;
}


export default LetterButton
