import { useState } from 'react';
import GeneralInfo from './General';
import EducationInfo from './Education';

function GeneralOutput({ fullName, email, phoneNumber }) {
  return (
    <>
      <h1>{fullName}</h1>
      <p>{email}</p>
      <p>{phoneNumber}</p>
    </>
  );
}

function EducationOutput({ schoolName, major, startDate, endDate }) {
  return (
    <>
      <p>{schoolName}</p>
      <p>{major}</p>
      <p>{startDate}</p>
      <p>{endDate}</p>
    </>
  );
}

export default function UserOutput() {
  const [generalOutput, setGeneralOutput] = useState({
    fullName: 'John Doe',
    email: 'johndoe@email.com',
    phoneNumber: '1234567890',
  });

  const [educationOutput, setEducatioOutput] = useState({
    schoolName: 'Random School',
    major: 'Computer Science',
    startDate: '2019-08-29',
    endDate: '2022-05-24',
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

  const handleSchoolName = (newSchool) => {
    setEducatioOutput((prevSchool) => ({
      ...prevSchool,
      schoolName: newSchool,
    }));
  };

  const handleMajor = (newMajor) => {
    setEducatioOutput((prevMajor) => ({
      ...prevMajor,
      major: newMajor,
    }));
  };

  const handleSchoolStart = (newStart) => {
    setEducatioOutput((prevStart) => ({
      ...prevStart,
      startDate: newStart,
    }));
  };

  const handleSchoolEnd = (newEnd) => {
    setEducatioOutput((prevEnd) => ({
      ...prevEnd,
      endDate: newEnd,
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

          <EducationInfo
            schoolName={handleSchoolName}
            major={handleMajor}
            startDate={handleSchoolStart}
            endDate={handleSchoolEnd}
          />
        </div>
      </div>
      <div className="user-output">
        <GeneralOutput
          fullName={generalOutput.fullName}
          email={generalOutput.email}
          phoneNumber={generalOutput.phoneNumber}
        />

        <EducationOutput
          schoolName={educationOutput.schoolName}
          major={educationOutput.major}
          startDate={educationOutput.startDate}
          endDate={educationOutput.endDate}
        />
      </div>
    </>
  );
}
