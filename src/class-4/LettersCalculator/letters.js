import { useState } from "react";
import "./letters.css";

const CalculateLetter = () => {
  const [inputValue, setInputValue] = useState('');
  const [letterCount, setLetterCount] = useState(0);

  // Function to handle input change and update the letter count
  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    setLetterCount(value.length);
  };

  return (
    <div className="main-div">
      <div className="content-div">
        <h1 className="heading1">Calculate The <br></br>Letters You <br></br>Enter</h1>
        <label htmlFor="letterText" className="text">Enter the Phrase</label>
        <input
          type="text"
          placeholder="Enter the phrase"
          id="letterText"
          value={inputValue}
          className="inputText"
          onChange={handleInputChange}
        />
        <p className="count-para">No. of letters: {letterCount}</p>
      </div>
      <div className="image-div">
        <img
          src="/calculator-image.PNG"
          alt="calculate"
          className="calculateImage"
        />
      </div>
    </div>
  );
};

export default CalculateLetter;
