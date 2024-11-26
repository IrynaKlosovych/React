import { useState } from 'react';
import './styles/App.css'
import DisplayInput from './components/DisplayInput';
import DisplayOutput from './components/DisplayOutput';
import DisplayButton from './components/DisplayButton';

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleButtonClick = (buttonName) => {
    if (buttonName === "Clear") {
      setInput("");
      setResult("");
    } else if (buttonName === "=") {
      try {
        const calcResult = eval(input);
        setResult(calcResult.toString());
      }
      catch {
        setResult("Error");
      }
    } else {
      setInput((prevInput) => prevInput + buttonName);
    }
  }

  return (
    <>
      <div className='main'>
        <h2>Calculator</h2>
        <DisplayOutput result={result} />
        <DisplayInput input={input} />
        <DisplayButton buttonClick={handleButtonClick} />
      </div>
    </>
  )
}

export default App
