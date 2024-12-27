import { useState } from 'react';
import GeneralInfo from './components/General';
import EducationInfo from './components/Education';
import UserOutput, { EducationOutput } from './components/UserOutput';
import ExperienceInfo from './components/Experience';

function App() {
  const [general, setGeneral] = useState({
    name: 'John',
    email: 'johndoe@email.com',
    phoneNumber: '1234567890',
  });

  const [educationList, setEducationList] = useState([
    {
      schoolName: 'Random School',
      schoolLocation: 'Random Location',
      schoolStartDate: '2019-08-29',
      schoolEndDate: '2022-05-21',
    },
  ]);

  const [experienceList, setExperienceList] = useState([
    {
      companyName: 'Random Company',
      companyLocation: 'Random Company Location',
      companyStartDate: '2022-06-01',
      companyEndDate: '2024-11-21',
    },
  ]);

  const handleGeneral = (e) => {
    const { id, value } = e.target;
    setGeneral((prevText) => ({
      ...prevText,
      [id]: value,
    }));
  };

  const handleEducationChange = (index, e) => {
    const { id, value } = e.target;
    setEducationList((prevList) =>
      prevList.map((education, i) =>
        i === index
          ? {
              ...education,
              [id]: value,
            }
          : education
      )
    );
  };

  const handleNewEducation = () => {
    setEducationList((prevList) => [
      ...prevList,
      {
        schoolName: '',
        schoolLocation: '',
        schoolStartDate: '',
        schoolEndDate: '',
      },
    ]);
  };

  const handleExperienceChange = (e) => {
    const { id, value } = e.target;

    setExperienceList((prevExp) => ({
      ...prevExp,
      [id]: value,
    }));
  };

  return (
    <>
      <div className="user-input">
        <div className="general-input">
          <GeneralInfo onChange={handleGeneral} />
        </div>
        <div className="education-input">
          {educationList.map((education, index) => (
            <EducationInfo
              key={index}
              onChange={(e) => handleEducationChange(index, e)}
            />
          ))}
          <button onClick={handleNewEducation}>Add Education</button>
        </div>
        <div className="experience-input">
          {experienceList.map((e, index) => {
            return (
              <ExperienceInfo key={index} onChange={handleExperienceChange} />
            );
          })}
        </div>
      </div>
      <div className="user-output">
        <UserOutput
          generalName={general.name}
          generalEmail={general.email}
          generalPhoneNumber={general.phoneNumber}
        />
        {educationList.map((education, index) => (
          <EducationOutput
            key={index}
            educationName={education.schoolName}
            educationLocation={education.schoolLocation}
            educationStartDate={education.schoolStartDate}
            educationEndDate={education.schoolEndDate}
          />
        ))}
      </div>
    </>
  );
}

export default App;
