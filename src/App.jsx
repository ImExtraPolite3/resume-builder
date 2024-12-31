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
      id: Math.random(),
      schoolName: 'Random School',
      schoolLocation: 'Random Location',
      schoolStartDate: '2019-08-29',
      schoolEndDate: '2022-05-21',
    },
  ]);

  const [experienceList, setExperienceList] = useState([
    {
      id: Math.random(),
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
  const [showInput, setShowInput] = useState('');
  const [showOutput, setShowOutput] = useState('none');
  const [grid, setGrid] = useState('3 / 4');

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

  const handleEducationChange = (id, e) => {
    const { name, value } = e.target;
    setEducationList((prevList) =>
      prevList.map((education) =>
        education.id === id ? { ...education, [name]: value } : education
      )
    );
  };

  const handleNewEducation = () => {
    setEducationList((prevList) => [
      ...prevList,
      {
        id: Math.random(),
        schoolName: '',
        schoolLocation: '',
        schoolStartDate: '',
        schoolEndDate: '',
      },
    ]);
  };

  const handleDeleteEducation = (id) => {
    setEducationList((prevEdu) => prevEdu.filter((e) => e.id !== id));
  };

  const handleExperienceChange = (id, event) => {
    const { name, value } = event.target;
    setExperienceList((prevList) =>
      prevList.map((experience) =>
        experience.id === id ? { ...experience, [name]: value } : experience
      )
    );
  };

  const handleNewExperience = () => {
    setExperienceList((prevList) => [
      ...prevList,
      {
        id: Math.random(),
        companyName: '',
        companyLocation: '',
        companyStartDate: '',
        companyEndDate: '',
      },
    ]);
  };

  const handleDeleteExperience = (id) => {
    setExperienceList((prevList) => prevList.filter((e) => e.id !== id));
  };

  return (
    <>
      <div className="header">
        <h1>Resume Builder</h1>
      </div>
      <div className="nav-section" style={{ display: showInput }}>
        <CreateButtons checkButton={selected} onClick={hideSections} />
      </div>
      <div className="main-content" style={{ gridRow: grid }}>
        <div className="user-input" style={{ display: showInput }}>
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

            {educationList.map((education) => (
              <div key={education.id} className={`education${education.id}`}>
                <div>
                  <h3>{`Education`}</h3>
                  <button
                    onClick={() => {
                      handleDeleteEducation(education.id);
                    }}
                  >
                    delete
                  </button>
                </div>
                <EducationInfo
                  key={education.id}
                  onChange={(edu) => handleEducationChange(education.id, edu)}
                />
              </div>
            ))}
          </div>
          <div className="experience-input" style={{ display: hideExperience }}>
            <div className="create-more">
              <h2>Experience Section</h2>
              <button onClick={handleNewExperience}>Add Experience</button>
            </div>

            {experienceList.map((e) => {
              return (
                <div key={e.id} className={`experience${e.id}`}>
                  <div>
                    <h3>{`Company`}</h3>
                    <button
                      onClick={() => {
                        handleDeleteExperience(e.id);
                      }}
                    >
                      delete
                    </button>
                  </div>
                  <ExperienceInfo
                    key={e.id}
                    onChange={(exp) => handleExperienceChange(e.id, exp)}
                  />
                </div>
              );
            })}
          </div>
          <button
            className="preview"
            onClick={() => {
              setShowInput('none');
              setShowOutput('');
              setGrid('2 / 4');
            }}
          >
            preview
          </button>
        </div>
        <div className="user-output" style={{ display: showOutput }}>
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
          <button
            className="edit"
            onClick={() => {
              setShowInput('');
              setShowOutput('none');
              setGrid('3 / 4');
            }}
          >
            edit
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
