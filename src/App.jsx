import { useState } from 'react';
import Education from './components/Education';
import Experience from './components/Experience';
import General from './components/General';

const buttonName = ['General', 'Education', 'Experience'];

function ButtonProp({ name, whenClick }) {
  return (
    <button className={`show-${name}`} onClick={whenClick}>
      {name}
    </button>
  );
}

function CreateButtons({
  setHideGeneral,
  setHideEducation,
  setHideExperience,
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
          } else if (eachButton === 'Education') {
            setHideGeneral('none');
            setHideEducation('');
            setHideExperience('none');
          } else {
            setHideGeneral('none');
            setHideEducation('none');
            setHideExperience('');
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

  return (
    <>
      <h1>CV Application</h1>
      <section className="user-input">
        <div className="section-buttons">
          <CreateButtons
            setHideGeneral={setHideGeneral}
            setHideEducation={setHideEducation}
            setHideExperience={setHideExperience}
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
