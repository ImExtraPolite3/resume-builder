import { useState } from 'react';
import GeneralInput from './components/General';
import GeneralOutput from './components/UserOutput';

function App() {
  const [inputValues, setInputValues] = useState({});

  const handleValues = (e, index) => {
    setInputValues({
      ...inputValues,
      [index]: e.target.value,
    });
  };

  return (
    <>
      <div className="input">
        <GeneralInput onChange={handleValues} inputValue={inputValues} />
      </div>
      <div className="output">
        {[...Array(3)].map((e, index) => {
          return (
            <GeneralOutput key={index} generalValues={inputValues[index]} />
          );
        })}
      </div>
    </>
  );
}

export default App;
