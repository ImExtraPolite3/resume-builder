import { useState } from 'react';
import GeneralInfo from './components/General';

function App() {
  const [displayName, setDisplayName] = useState('John Doe');
  const [displayEmail, setDisplayEmail] = useState('johndoe@email.com');

  const handleDisplay = (e) => {
    setDisplayName(e);
  };

  const handleEmail = (e) => {
    setDisplayEmail(e);
  };

  return (
    <>
      <h1>{displayName}</h1>
      <p>{displayEmail}</p>
      <GeneralInfo fullName={handleDisplay} email={handleEmail} />
    </>
  );
}

export default App;
