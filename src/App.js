import starIcon from './icon-star.svg';
import thanks from './illustration-thank-you.svg';
import './App.css';
import React, {useState} from 'react';
function App() {
  const [isClicked, setClick] = useState(false);
  const [feedback, setFeedback] = useState(1);

  const handleFeedback = value => { 
    setFeedback(value);
  }

  return (
    <main className="App">
      <header className="App-header">
        {!isClicked ?
        <div className = "Card" id = 'card1'>
          <div className = "wrapper-text">
            <div className = "circle">
              <img alt = "star" src = {starIcon}></img>
            </div>
            <h1>How did we do?</h1>
            <p>
            Please let us know how we did with your support request. All feedback is appreciated 
  to help us improve our offering!
            </p>
          </div>
          <div className = "rating-circles-container">
             {
              [1,2,3,4,5].map((value) => 
              <button className = "circle2" onClick= {() => handleFeedback(value)} >
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
        <img alt='thanks' src = {thanks}></img>
        <div className='RatingPill'>
            <p className='Ratingtext'>You selected {feedback} out of 5</p>
        </div>
        <h1>Thank you!</h1>
          <p>
          We appreciate you taking the time to give a rating. If you ever need more support, 
  don’t hesitate to get in touch!
          </p>
        </div>
      }
      </header>
    </main>
  );
}

export default App;
