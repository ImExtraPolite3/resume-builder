import { useState } from 'react';
import GeneralInfo from './components/General';
import EducationInfo from './components/Education';
import UserOutput, { EducationOutput } from './components/UserOutput';

function App() {
  const [general, setGeneral] = useState({
    name: 'John',
    email: 'johndoe@email.com',
    phoneNumber: '1234567890',
  });

  const [education, setEducation] = useState({
    schoolName0: 'Random School',
    schoolLocation0: 'Random Location',
    schoolStartDate0: '2019-08-29',
    schoolEndDate0: '2022-05-21',
  });

  const [newEducation, setNewEducation] = useState([]);
  const [newEducationOutput, setNewEducationOutput] = useState([]);

  const handleGeneral = (e) => {
    const { id, value } = e.target;

    setGeneral((prevText) => ({
      ...prevText,
      [id]: value,
    }));
  };

  const handleEducation = (e) => {
    const { id, value } = e.target;

    setEducation((prevText) => ({
      ...prevText,
      [id]: value,
    }));
  };

  const handleNewEducation = () => {
    let num = 1;

    setNewEducation((prevEducation) => [
      ...prevEducation,
      <EducationInfo
        key={prevEducation.length}
        onChange={handleEducation}
        num={num}
      />,
    ]);

    setNewEducationOutput((prevOutput) => [
      ...prevOutput,
      <EducationOutput
        key={prevOutput.length}
        educationName={education.schoolName0}
        educationLocation={education.schoolLocation0}
        educationStartDate={education.schoolStartDate0}
        educationEndDate={education.schoolEndDate0}
      />,
    ]);

    num++;
  };

  return (
    <>
      <div className="user-input">
        <div className="general-input">
          <GeneralInfo onChange={handleGeneral} />
        </div>
        <div className="education-input">
          <EducationInfo onChange={handleEducation} num={0} />
          {newEducation}
          <button onClick={handleNewEducation}>add education</button>
        </div>
      </div>
      <div className="user-output">
        <UserOutput
          generalName={general.name}
          generalEmail={general.email}
          generalPhoneNumber={general.phoneNumber}
        />
        <EducationOutput
          educationName={education.schoolName0}
          educationLocation={education.schoolLocation0}
          educationStartDate={education.schoolStartDate0}
          educationEndDate={education.schoolEndDate0}
        />
        {newEducationOutput}
      </div>
    </>
  );
}

export default App;
