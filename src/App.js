import starIcon from './icon-star.svg';
import thanks from './illustration-thank-you.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
function App() {
  const [isClicked, setClick] = useState(false);
  const [feedback, setFeedback] = useState(1);

  const handleFeedback = value => { 
    setFeedback(value);
  }

  return (
    <div className="App">
      <header className="App-header">
        {!isClicked ?
        <div className = "Card" id = 'card1'>
          <div className = "wrapper-text">
            <div className = "circle">
              <img src = {starIcon}></img>
            </div>
            <h2>How did we do?</h2>
            <p>
            Please let us know how we did with your support request. All feedback is appreciated 
  to help us improve our offering!
            </p>
          </div>
          <div className = "rating-circles-container">
             {
              [1,2,3,4,5].map((value) => 
              <button className = "circle" id = 'btn2' onClick= {() => handleFeedback(value)} >
                {value}
              </button>)
             }
          </div>
          <button className = "submitButton" onClick = {setClick}>
            SUBMIT
          </button>
        </div>

        :

        <div className = "Card" id = 'card2'>
        <img src = {thanks}></img>
        <div className='RatingPill'>
            <p className='Ratingtext'>You selected {feedback} out of 5</p>
        </div>
        <h2>Thank you!</h2>
          <p>
          We appreciate you taking the time to give a rating. If you ever need more support, 
  don’t hesitate to get in touch!
          </p>
        </div>
      }
      </header>
    </div>
  );
}

export default App;
