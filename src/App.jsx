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
      id: crypto.randomUUID(),
      major: 'Major',
      schoolName: 'School Name',
      schoolStartDate: 'Start Date',
      schoolEndDate: 'End Date',
    },
  ]);

  const [experienceList, setExperienceList] = useState([
    {
      id: crypto.randomUUID(),
      companyName: 'Company Name',
      title: 'Title',
      companyStartDate: 'Start Date',
      companyEndDate: 'End Date',
    },
  ]);

  const [hideGeneral, setHideGeneral] = useState('');
  const [hideEducation, setHideEducation] = useState('none');
  const [hideExperience, setHideExperience] = useState('none');
  const [selected, setSelected] = useState('General');
  const [showInput, setShowInput] = useState('');
  const [showOutput, setShowOutput] = useState('none');

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
        i === index ? { ...education, [id]: value } : education
      )
    );
  };

  const handleNewEducation = () => {
    setEducationList((prevList) => [
      ...prevList,
      {
        id: crypto.randomUUID(),
        major: 'Major',
        schoolName: 'School Name',
        schoolStartDate: 'Start Date',
        schoolEndDate: 'End Date',
      },
    ]);
  };

  const handleDeleteEducation = (id) => {
    setEducationList((prevEdu) => prevEdu.filter((e) => e.id !== id));
  };

  const handleExperienceChange = (index, event) => {
    const { id, value } = event.target;
    setExperienceList((prevList) =>
      prevList.map((exp, i) => (i === index ? { ...exp, [id]: value } : exp))
    );
  };

  const handleNewExperience = () => {
    setExperienceList((prevList) => [
      ...prevList,
      {
        id: crypto.randomUUID(),
        companyName: 'Company Name',
        title: 'Title',
        companyStartDate: 'Start Date',
        companyEndDate: 'End Date',
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
      <div className="main-content">
        <div className="nav-section" style={{ display: showInput }}>
          <CreateButtons checkButton={selected} onClick={hideSections} />
        </div>
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

            {educationList.map((education, index) => (
              <div key={education.id} className={`education`}>
                <div className="input-header">
                  <h3>{`Education`}</h3>
                  <button
                    onClick={() => {
                      handleDeleteEducation(education.id);
                    }}
                  >
                    <img src="delete.svg" alt="delete" className="delete-img" />
                  </button>
                </div>
                <EducationInfo
                  key={education.id}
                  onChange={(edu) => handleEducationChange(index, edu)}
                />
              </div>
            ))}
          </div>
          <div className="experience-input" style={{ display: hideExperience }}>
            <div className="create-more">
              <h2>Experience Section</h2>
              <button onClick={handleNewExperience}>Add Experience</button>
            </div>

            {experienceList.map((e, index) => {
              return (
                <div key={e.id} className={`experience`}>
                  <div className="input-header">
                    <h3>{`Company`}</h3>
                    <button
                      onClick={() => {
                        handleDeleteExperience(e.id);
                      }}
                    >
                      <img
                        src="delete.svg"
                        alt="delete"
                        className="delete-img"
                      />
                    </button>
                  </div>
                  <ExperienceInfo
                    key={e.id}
                    onChange={(exp) => handleExperienceChange(index, exp)}
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
            }}
          >
            preview
          </button>
        </div>
        <div className="user-output" style={{ display: showOutput }}>
          <div className="page">
            <div className="general-output">
              <GeneralOutput
                generalName={general.name}
                generalEmail={general.email}
                generalPhoneNumber={general.phoneNumber}
              />
            </div>
            <div className="education-output">
              <h3>EDUCATION</h3>
              <hr />
              {educationList.map((education) => (
                <div key={education.id}>
                  <EducationOutput
                    key={education.id}
                    educationMajor={education.major}
                    educationName={education.schoolName}
                    educationStartDate={education.schoolStartDate}
                    educationEndDate={education.schoolEndDate}
                  />
                </div>
              ))}
            </div>
            <div className="experience-output">
              <h3>EXPERIENCE</h3>
              <hr />
              {experienceList.map((experience) => {
                return (
                  <div key={experience.id}>
                    <ExperienceOutput
                      key={experience.id}
                      companyName={experience.companyName}
                      title={experience.title}
                      companyStartDate={experience.companyStartDate}
                      companyEndDate={experience.companyEndDate}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          <button
            className="edit"
            onClick={() => {
              setShowInput('');
              setShowOutput('none');
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
