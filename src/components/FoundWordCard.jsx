const FoundWordCard = (props) => {

  const displayDef = () =>{
    let styleName = document.querySelector(`.${props.word}-shortdef`).style
    styleName.display === 'block' ? styleName.display = 'none': styleName.display='block';
  }

  return(
    <div className="card bg-light bw-word-card-div">
      <div className="card-body bw-word-card">
        <h5 className="card-title bw-card-title">
          {props.word + " "}
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill"
            viewBox="0 0 16 16" onClick={displayDef}>
              <path
              d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
          </svg>
        </h5>
        <div className={`${props.word}-shortdef`}>
          {props.shortdef.map((shortdef,index) => <p className="card-text" key={index}> {index+1}. {props.shortdef[index]} </p>)}
        </div>
      </div>
    </div>
  )
}

export default FoundWordCard
