const ResultsTable = (props) => {

  return(
    <div>
      <div className="card bg" id="table-div">
        <div className="card-body" id="inner-table-div">
          <h5 className="card-title" id="inner-inner-table-div">
            Word Grid
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
              className="bi bi-caret-down-fill" viewBox="0 0 16 16">
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
                <th scope="row">0</th>
                <td>
                  {/* <%= sum=0 @filtered_words.each do |word| if /^[#{@letters[0]}].{3}$/===word sum +=1 end end sum
                    %> */}
                </td>
                <td>
                  {/* <%= sum=0 @filtered_words.each do |word| if /^[#{@letters[0]}].{4}$/===word sum +=1 end end sum
                    %> */}
                </td>
                <td>
                  {/* <%= sum=0 @filtered_words.each do |word| if /^[#{@letters[0]}].{5}$/===word sum +=1 end end sum
                    %> */}
                </td>
                <td>
                  {/* <%= sum=0 @filtered_words.each do |word| if /^[#{@letters[0]}].{6}$/===word sum +=1 end end sum
                    %> */}
                </td>
                <td>
                  {/* <%= sum=0 @filtered_words.each do |word| if /^[#{@letters[0]}].{7,}$/===word sum +=1 end end sum
                    %> */}
                </td>
                <td>
                  {/* <%= sum=0 @filtered_words.each do |word| if /^[#{@letters[0]}].{3,}$/===word sum +=1 end end sum
                    %> */}
                </td>
              </tr>
              <tr>
                <th scope="row">0</th>
                <td>
                  {/* <%= sum=0 @filtered_words.each do |word| if /^[#{@letters[1]}].{3}$/===word sum +=1 end end sum
                    %> */}
                </td>
                <td>
                  {/* <%= sum=0 @filtered_words.each do |word| if /^[#{@letters[1]}].{4}$/===word sum +=1 end end sum
                    %> */}
                </td>
                <td>
                  {/* <%= sum=0 @filtered_words.each do |word| if /^[#{@letters[1]}].{5}$/===word sum +=1 end end sum
                    %> */}
                </td>
                <td>
                  {/* <%= sum=0 @filtered_words.each do |word| if /^[#{@letters[1]}].{6}$/===word sum +=1 end end sum
                    %> */}
                </td>
                <td>
                  {/* <%= sum=0 @filtered_words.each do |word| if /^[#{@letters[1]}].{7,}$/===word sum +=1 end end sum
                    %> */}
                </td>
                <td>
                  {/* <%= sum=0 @filtered_words.each do |word| if /^[#{@letters[1]}].{3,}$/===word sum +=1 end end sum
                    %> */}
                </td>
              </tr>
              <tr>
                <th scope="row">0</th>
                <td>
                  {/* <%= sum=0 @filtered_words.each do |word| if /^[#{@letters[2]}].{3}$/===word sum +=1 end end sum
                    %> */}
                </td>
                <td>
                  {/* <%= sum=0 @filtered_words.each do |word| if /^[#{@letters[2]}].{4}$/===word sum +=1 end end sum
                    %> */}
                </td>
                <td>
                  {/* <%= sum=0 @filtered_words.each do |word| if /^[#{@letters[2]}].{5}$/===word sum +=1 end end sum
                    %> */}
                </td>
                <td>
                  {/* <%= sum=0 @filtered_words.each do |word| if /^[#{@letters[2]}].{6}$/===word sum +=1 end end sum
                    %> */}
                </td>
                <td>
                  {/* <%= sum=0 @filtered_words.each do |word| if /^[#{@letters[2]}].{7,}$/===word sum +=1 end end sum
                    %> */}
                </td>
                <td>
                  {/* <%= sum=0 @filtered_words.each do |word| if /^[#{@letters[2]}].{3,}$/===word sum +=1 end end sum
                    %> */}
                </td>
              </tr>
              <tr>
                <th scope="row">0</th>
                <td>
                  {/* <%= sum=0 @filtered_words.each do |word| if /^[#{@letters[3]}].{3}$/===word sum +=1 end end sum
                    %> */}
                </td>
                <td>
                  {/* <%= sum=0 @filtered_words.each do |word| if /^[#{@letters[3]}].{4}$/===word sum +=1 end end sum
                    %> */}
                </td>
                <td>
                  {/* <%= sum=0 @filtered_words.each do |word| if /^[#{@letters[3]}].{5}$/===word sum +=1 end end sum
                    %> */}
                </td>
                <td>
                  {/* <%= sum=0 @filtered_words.each do |word| if /^[#{@letters[3]}].{6}$/===word sum +=1 end end sum
                    %> */}
                </td>
                <td>
                  {/* <%= sum=0 @filtered_words.each do |word| if /^[#{@letters[3]}].{7,}$/===word sum +=1 end end sum
                    %> */}
                </td>
                <td>
                  {/* <%= sum=0 @filtered_words.each do |word| if /^[#{@letters[3]}].{3,}$/===word sum +=1 end end sum
                    %> */}
                </td>
              </tr>
              <tr>
                <th scope="row">0</th>
                <td>
                  {/* <%= sum=0 @filtered_words.each do |word| if /^[#{@letters[4]}].{3}$/===word sum +=1 end end sum
                    %> */}
                </td>
                <td>
                  {/* <%= sum=0 @filtered_words.each do |word| if /^[#{@letters[4]}].{4}$/===word sum +=1 end end sum
                    %> */}
                </td>
                <td>
                  {/* <%= sum=0 @filtered_words.each do |word| if /^[#{@letters[4]}].{5}$/===word sum +=1 end end sum
                    %> */}
                </td>
                <td>
                  {/* <%= sum=0 @filtered_words.each do |word| if /^[#{@letters[4]}].{6}$/===word sum +=1 end end sum
                    %> */}
                </td>
                <td>
                  {/* <%= sum=0 @filtered_words.each do |word| if /^[#{@letters[4]}].{7,}$/===word sum +=1 end end sum
                    %> */}
                </td>
                <td>
                  {/* <%= sum=0 @filtered_words.each do |word| if /^[#{@letters[4]}].{3,}$/===word sum +=1 end end sum
                    %> */}
                </td>
              </tr>
              <tr>
                <th scope="row">0</th>
                <td>
                  {/* <%= sum=0 @filtered_words.each do |word| if /^[#{@letters[5]}].{3}$/===word sum +=1 end end sum
                    %> */}
                </td>
                <td>
                  {/* <%= sum=0 @filtered_words.each do |word| if /^[#{@letters[5]}].{4}$/===word sum +=1 end end sum
                    %> */}
                </td>
                <td>
                  {/* <%= sum=0 @filtered_words.each do |word| if /^[#{@letters[5]}].{5}$/===word sum +=1 end end sum
                    %> */}
                </td>
                <td>
                  {/* <%= sum=0 @filtered_words.each do |word| if /^[#{@letters[5]}].{6}$/===word sum +=1 end end sum
                    %> */}
                </td>
                <td>
                  {/* <%= sum=0 @filtered_words.each do |word| if /^[#{@letters[5]}].{7,}$/===word sum +=1 end end sum
                    %> */}
                </td>
                <td>
                  {/* <%= sum=0 @filtered_words.each do |word| if /^[#{@letters[5]}].{3,}$/===word sum +=1 end end sum
                    %> */}
                </td>
              </tr>
              <tr>
                <th scope="row">0</th>
                <td>
                  {/* <%= sum=0 @filtered_words.each do |word| if /^[#{@letters[6]}].{3}$/===word sum +=1 end end sum
                    %> */}
                </td>
                <td>
                  {/* <%= sum=0 @filtered_words.each do |word| if /^[#{@letters[6]}].{4}$/===word sum +=1 end end sum
                    %> */}
                </td>
                <td>
                  {/* <%= sum=0 @filtered_words.each do |word| if /^[#{@letters[6]}].{5}$/===word sum +=1 end end sum
                    %> */}
                </td>
                <td>
                  {/* <%= sum=0 @filtered_words.each do |word| if /^[#{@letters[6]}].{6}$/===word sum +=1 end end sum
                    %> */}
                </td>
                <td>
                  {/* <%= sum=0 @filtered_words.each do |word| if /^[#{@letters[6]}].{7,}$/===word sum +=1 end end sum
                    %> */}
                </td>
                <td>
                  {/* <%= sum=0 @filtered_words.each do |word| if /^[#{@letters[6]}].{3,}$/===word sum +=1 end end sum
                    %> */}
                </td>
              </tr>
              <tr>
                <th scope="row">Σ</th>
                <td>
                  {/* <%= sum=0 @filtered_words.each do |word| if /^.{4}$/===word sum +=1 end end sum %> */}
                </td>
                <td>
                  {/* <%= sum=0 @filtered_words.each do |word| if /^.{5}$/===word sum +=1 end end sum %> */}
                </td>
                <td>
                  {/* <%= sum=0 @filtered_words.each do |word| if /^.{6}$/===word sum +=1 end end sum %> */}
                </td>
                <td>
                  {/* <%= sum=0 @filtered_words.each do |word| if /^.{7}$/===word sum +=1 end end sum %> */}
                </td>
                <td>
                  {/* <%= sum=0 @filtered_words.each do |word| if /^.{8,}$/===word sum +=1 end end sum %> */}
                </td>
                <td>0</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}


export default ResultsTable
