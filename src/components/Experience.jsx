import { useState } from 'react';

const getIdName = [
  'work-title',
  'company',
  'office-location',
  'start-date',
  'end-date',
];

const getName = [
  'Title:',
  'Company:',
  'Office Location:',
  'Start Date:',
  'End Date:',
];

function CreateGeneralContent({ idName, name, key }) {
  return (
    <div>
      <label htmlFor={idName}>{name}</label>
      <input type="text" key={key} id={idName} />
    </div>
  );
}

function GeneralContent() {
  return getIdName.map((eachIdName, index) => {
    return (
      <CreateGeneralContent
        idName={eachIdName}
        key={index}
        name={getName[index]}
      />
    );
  });
}

export default function Experience() {
  const [newExperience, setExperiences] = useState([
    <GeneralContent key={0} />,
  ]);

  const handleAddExperience = () => {
    setExperiences((prevExperiences) => [
      ...prevExperiences,
      <GeneralContent key={prevExperiences.length} />,
    ]);
  };

  return (
    <div className="experience">
      <h1>Experience</h1>
      <button className="create-new-experience" onClick={handleAddExperience}>
        +
      </button>
      <div>{newExperience}</div>
    </div>
  );
}
