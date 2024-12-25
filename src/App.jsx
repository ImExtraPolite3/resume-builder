import { useState } from 'react';
import GeneralInfo from './components/General';
import UserOutput from './components/UserOutput';

function App() {
  const [general, setGeneral] = useState({
    name: 'John',
    email: 'johndoe@email.com',
    phoneNumber: '1234567890',
  });

  const handleGeneral = (e) => {
    const { id, value } = e.target;

    setGeneral((prevText) => ({
      ...prevText,
      [id]: value,
    }));
  };

  return (
    <>
      <div className="user-input">
        <div className="general-input">
          <GeneralInfo onChange={handleGeneral} />
        </div>
      </div>
      <div className="user-output">
        <div className="general-output">
          <UserOutput
            generalName={general.name}
            generalEmail={general.email}
            generalPhoneNumber={general.phoneNumber}
          />
        </div>
      </div>
    </>
  );
}

export default App;
