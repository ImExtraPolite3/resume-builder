import { useState } from 'react';
import GeneralInput from './components/General';
// import UserOutput from './components/UserOutput';

function App() {
  const [inputValues, setInputValues] = useState({});

  const handleValues = (e, index) => {
    setInputValues({
      ...inputValues,
      [index]: e.target.value,
    });
  };

  return (
    <div className="full-page">
      <h1 className="full-name"></h1>
      <GeneralInput onChange={handleValues} inputValue={inputValues} />
    </div>
  );
}

export default App;
