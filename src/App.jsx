import { useState } from 'react';
import Education from './components/Education';
import Experience from './components/Experience';
import General from './components/General';

const buttonName = ['General', 'Education', 'Experience'];

function ButtonProp({ name, whenClick, changeColor }) {
  return (
    <button
      className={`show-${name}`}
      style={{ display: changeColor }}
      onClick={whenClick}
    >
      {name}
    </button>
  );
}

function CreateButtons({
  setHideGeneral,
  setHideEducation,
  setHideExperience,
  setChangeColor,
}) {
  return buttonName.map((eachButton, index) => {
    return (
      <ButtonProp
        key={index}
        name={eachButton}
        whenClick={() => {
          if (eachButton === 'General') {
            setHideGeneral('');
            setHideEducation('none');
            setHideExperience('none');
            setChangeColor('#777');
          } else if (eachButton === 'Education') {
            setHideGeneral('none');
            setHideEducation('');
            setHideExperience('none');
            setChangeColor('#777');
          } else {
            setHideGeneral('none');
            setHideEducation('none');
            setHideExperience('');
            setChangeColor('white');
          }
        }}
      />
    );
  });
}

function App() {
  const [hideEducation, setHideEducation] = useState('none');
  const [hideExperience, setHideExperience] = useState('none');
  const [hideGeneral, setHideGeneral] = useState('');
  const [changeColor, setChangeColor] = useState('#777777');

  return (
    <>
      <div className="heading">
        <h1>CV Application</h1>
      </div>
      <section className="user-input">
        <div className="section-buttons">
          <CreateButtons
            setHideGeneral={setHideGeneral}
            setHideEducation={setHideEducation}
            setHideExperience={setHideExperience}
            setChangeColor={setChangeColor}
          />
        </div>
        <div className="section-input">
          <General hideGeneral={hideGeneral} />
          <Education hideEducation={hideEducation} />
          <Experience hideExperience={hideExperience} />
        </div>
      </section>
    </>
  );
}

export default App;
