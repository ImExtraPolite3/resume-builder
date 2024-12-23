import { useState } from 'react';
import GeneralInfo from './General';

function GeneralOutput({ fullName, email, phoneNumber }) {
  return (
    <>
      <h1>{fullName}</h1>
      <p>{email}</p>
      <p>{phoneNumber}</p>
    </>
  );
}

export default function UserOutput() {
  const [generalOutput, setGeneralOutput] = useState({
    fullName: 'John Doe',
    email: 'johndoe@email.com',
    phoneNumber: '1234567890',
  });

  const handleFullName = (newName) => {
    setGeneralOutput((prevName) => ({ ...prevName, fullName: newName }));
  };

  const handleEmail = (newEmail) => {
    setGeneralOutput((prevEmail) => ({ ...prevEmail, email: newEmail }));
  };

  const handlePhoneNumber = (newPhoneNumber) => {
    setGeneralOutput((prevPhoneNumber) => ({
      ...prevPhoneNumber,
      phoneNumber: newPhoneNumber,
    }));
  };

  return (
    <>
      <div className="user-input">
        <div className="general-input">
          <GeneralInfo
            fullName={handleFullName}
            email={handleEmail}
            phoneNumber={handlePhoneNumber}
          />
        </div>
      </div>
      <div className="user-output">
        <GeneralOutput
          fullName={generalOutput.fullName}
          email={generalOutput.email}
          phoneNumber={generalOutput.phoneNumber}
        />
      </div>
    </>
  );
}
