import { useState } from 'react';
import GeneralInfo from './components/General';
import EducationInfo from './components/Education';
import GeneralOutput, {
  EducationOutput,
  ExperienceOutput,
} from './components/UserOutput';
import ExperienceInfo from './components/Experience';

const buttonName = ['General', 'Education', 'Experience'];

function Buttons({ buttonName, onClick, checkButton }) {
  return (
    <button
      id={buttonName}
      style={{
        backgroundColor: buttonName === checkButton ? 'gray' : '#333333',
      }}
      onClick={onClick}
    >
      {buttonName}
    </button>
  );
}

function CreateButtons({ onClick, checkButton }) {
  return buttonName.map((name, index) => {
    return (
      <Buttons
        key={index}
        onClick={onClick}
        checkButton={checkButton}
        buttonName={name}
      />
    );
  });
}

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

  const [hideGeneral, setHideGeneral] = useState('');
  const [hideEducation, setHideEducation] = useState('none');
  const [hideExperience, setHideExperience] = useState('none');
  const [selected, setSelected] = useState('General');

  const hideSections = (e) => {
    if (e.target.textContent === 'General') {
      setHideGeneral('');
      setHideEducation('none');
      setHideExperience('none');
      setSelected('General');
    } else if (e.target.textContent === 'Education') {
      setHideGeneral('none');
      setHideEducation('');
      setHideExperience('none');
      setSelected('Education');
    } else {
      setHideGeneral('none');
      setHideEducation('none');
      setHideExperience('');
      setSelected('Experience');
    }
  };

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

  const handleExperienceChange = (index, e) => {
    const { id, value } = e.target;
    setExperienceList((prevExp) =>
      prevExp.map((exp, i) => (i === index ? { ...exp, [id]: value } : exp))
    );
  };

  const handleNewExperience = () => {
    setExperienceList((prevList) => [
      ...prevList,
      {
        companyName: '',
        companyLocation: '',
        companyStartDate: '',
        companyEndDate: '',
      },
    ]);
  };

  return (
    <>
      <div className="header">
        <h1>Resume Builder</h1>
      </div>
      <div className="nav-section">
        <CreateButtons checkButton={selected} onClick={hideSections} />
      </div>
      <div className="main-content">
        <div className="user-input">
          <div className="general-input" style={{ display: hideGeneral }}>
            <h2>General Section</h2>
            <div className="general">
              <GeneralInfo onChange={handleGeneral} />
            </div>
          </div>
          <div className="education-input" style={{ display: hideEducation }}>
            <div className="create-more">
              <h2>Education Section</h2>
              <button onClick={handleNewEducation}>Add Education</button>
            </div>

            {educationList.map((education, index) => (
              <>
                <div className={`education${index}`}>
                  <h3>{`Education ${index}`}</h3>
                  <EducationInfo
                    key={index}
                    onChange={(e) => handleEducationChange(index, e)}
                  />
                </div>
              </>
            ))}
          </div>
          <div className="experience-input" style={{ display: hideExperience }}>
            <div className="create-more">
              <h2>Experience Section</h2>
              <button onClick={handleNewExperience}>Add Experience</button>
            </div>

            {experienceList.map((e, index) => {
              return (
                <>
                  <div className={`experience${index}`}>
                    <h3>{`Company ${index}`}</h3>
                    <ExperienceInfo
                      key={index}
                      onChange={(e) => handleExperienceChange(index, e)}
                    />
                  </div>
                </>
              );
            })}
          </div>
          <button className="preview">preview</button>
        </div>
        <div className="user-output" style={{ display: 'none' }}>
          <div className="general-output">
            <GeneralOutput
              generalName={general.name}
              generalEmail={general.email}
              generalPhoneNumber={general.phoneNumber}
            />
          </div>
          <div className="education-output">
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
          <div className="experience-output">
            {experienceList.map((experience, index) => {
              return (
                <ExperienceOutput
                  key={index}
                  companyName={experience.companyName}
                  companyLocation={experience.companyLocation}
                  companyStartDate={experience.companyStartDate}
                  companyEndDate={experience.companyEndDate}
                />
              );
            })}
          </div>
          <button className="edit">edit</button>
        </div>
      </div>
    </>
  );
}

export default App;
