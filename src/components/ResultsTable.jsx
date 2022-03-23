const ResultsTable = (props) => {
  const filtered_words = Object.keys(props.words)

  const countWords = (filtered_words, letter, num_reg) => {
  let count=0
  filtered_words.forEach(word => word.match(`^[${letter}].{${num_reg}}$`)? ++count : 0);
  return count
  }
  const countWordsSum = (filtered_words, num_reg) => {
  let count=0
  filtered_words.forEach(word => word.match(`^.{${num_reg}}$`)? ++count : 0);
  return count
  }

  const displayTable = () =>{
    let styleName = document.querySelector(".table").style
    styleName.display === 'block' ? styleName.display = 'none': styleName.display='block';
  }

  return(
    <div>
      <div className="card bg" id="table-div">
        <div className="card-body" id="inner-table-div">
          <h5 className="card-title" id="inner-inner-table-div">
            {"Word Grid "}
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
              className="bi bi-caret-down-fill" viewBox="0 0 16 16" onClick={displayTable}>
              <path
                d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
            </svg>
          </h5>
          <table className="table table-borderless">
            <thead>
              <tr>
                <th scope="col column">#</th>
                <th scope="col column">4</th>
                <th scope="col column">5</th>
                <th scope="col column">6</th>
                <th scope="col column">7</th>
                <th scope="col column">8+</th>
                <th scope="col column">Σ</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">{props.letters[0]}</th>
                <td>
                  {countWords(filtered_words, props.letters[0],3)}
                </td>
                <td>
                  {countWords(filtered_words, props.letters[0],4)}
                </td>
                <td>
                  {countWords(filtered_words, props.letters[0],5)}
                </td>
                <td>
                  {countWords(filtered_words, props.letters[0],6)}
                </td>
                <td>
                  {countWords(filtered_words, props.letters[0],"7,")}
                </td>
                <td>
                  {countWords(filtered_words, props.letters[0],"3,")}
                </td>
              </tr>
              <tr>
                <th scope="row">{props.letters[1]}</th>
                <td>
                  {countWords(filtered_words, props.letters[1],3)}
                </td>
                <td>
                  {countWords(filtered_words, props.letters[1],4)}
                </td>
                <td>
                  {countWords(filtered_words, props.letters[1],5)}
                </td>
                <td>
                  {countWords(filtered_words, props.letters[1],6)}
                </td>
                <td>
                  {countWords(filtered_words, props.letters[1],"7,")}
                </td>
                <td>
                  {countWords(filtered_words, props.letters[1],"3,")}
                </td>
              </tr>
              <tr>
                <th scope="row">{props.letters[2]}</th>
                <td>
                  {countWords(filtered_words, props.letters[2],3)}
                </td>
                <td>
                  {countWords(filtered_words, props.letters[2],4)}
                </td>
                <td>
                  {countWords(filtered_words, props.letters[2],5)}
                </td>
                <td>
                  {countWords(filtered_words, props.letters[2],6)}
                </td>
                <td>
                  {countWords(filtered_words, props.letters[2],"7,")}
                </td>
                <td>
                  {countWords(filtered_words, props.letters[2],"3,")}
                </td>
              </tr>
              <tr>
                <th scope="row">{props.letters[3]}</th>
                <td>
                  {countWords(filtered_words, props.letters[3],3)}
                </td>
                <td>
                  {countWords(filtered_words, props.letters[3],4)}
                </td>
                <td>
                  {countWords(filtered_words, props.letters[3],5)}
                </td>
                <td>
                  {countWords(filtered_words, props.letters[3],6)}
                </td>
                <td>
                  {countWords(filtered_words, props.letters[3],"7,")}
                </td>
                <td>
                  {countWords(filtered_words, props.letters[3],"3,")}
                </td>
              </tr>
              <tr>
                <th scope="row">{props.letters[4]}</th>
                <td>
                  {countWords(filtered_words, props.letters[4],3)}
                </td>
                <td>
                  {countWords(filtered_words, props.letters[4],4)}
                </td>
                <td>
                  {countWords(filtered_words, props.letters[4],5)}
                </td>
                <td>
                  {countWords(filtered_words, props.letters[4],6)}
                </td>
                <td>
                  {countWords(filtered_words, props.letters[4],"7,")}
                </td>
                <td>
                  {countWords(filtered_words, props.letters[4],"3,")}
                </td>
              </tr>
              <tr>
                <th scope="row">{props.letters[5]}</th>
                <td>
                  {countWords(filtered_words, props.letters[5],3)}
                </td>
                <td>
                  {countWords(filtered_words, props.letters[5],4)}
                </td>
                <td>
                  {countWords(filtered_words, props.letters[5],5)}
                </td>
                <td>
                  {countWords(filtered_words, props.letters[5],6)}
                </td>
                <td>
                  {countWords(filtered_words, props.letters[5],"7,")}
                </td>
                <td>
                  {countWords(filtered_words, props.letters[3],"3,")}
                </td>
              </tr>
              <tr>
                <th scope="row">{props.letters[6]}</th>
                <td>
                  {countWords(filtered_words, props.letters[6],3)}
                </td>
                <td>
                  {countWords(filtered_words, props.letters[6],4)}
                </td>
                <td>
                  {countWords(filtered_words, props.letters[6],5)}
                </td>
                <td>
                  {countWords(filtered_words, props.letters[6],6)}
                </td>
                <td>
                  {countWords(filtered_words, props.letters[6],"7,")}
                </td>
                <td>
                  {countWords(filtered_words, props.letters[6],"3,")}
                </td>
              </tr>
              <tr>
                <th scope="row">Σ</th>
                <td>
                  {countWordsSum(filtered_words,4)}
                </td>
                <td>
                  {countWordsSum(filtered_words,5)}
                </td>
                <td>
                  {countWordsSum(filtered_words,6)}
                </td>
                <td>
                  {countWordsSum(filtered_words,7)}
                </td>
                <td>
                  {countWordsSum(filtered_words,"8,")}
                </td>
                <td>
                  {countWordsSum(filtered_words,"3,")}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}


export default ResultsTable
