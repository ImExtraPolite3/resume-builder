import { useState } from 'react';
import Education from './components/Education';
import Experience from './components/Experience';
import General from './components/General';

const buttonName = ['General', 'Education', 'Experience'];

function ButtonProp({ name, whenClick, changeColor }) {
  return (
    <button
      className={`show-${name}`}
      style={{ backgroundColor: changeColor }}
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
  setOnGeneral,
  setOnEducation,
  setOnExperience,
}) {
  const [changeColor, setChangeColor] = useState('');

  return buttonName.map((eachButton, index) => {
    const handleChangeColor = () => {
      setChangeColor('#1e1e1e');
    };

    return (
      <ButtonProp
        key={index}
        name={eachButton}
        changeColor={changeColor}
        whenClick={() => {
          handleChangeColor();
          if (eachButton === 'General') {
            setHideGeneral('');
            setHideEducation('none');
            setHideExperience('none');
            setChangeColor(() => {
              setOnGeneral('#777777');
              setOnEducation('#1e1e1e');
              setHideExperience('#1e1e1e');
            });
          } else if (eachButton === 'Education') {
            setHideGeneral('none');
            setHideEducation('');
            setHideExperience('none');
            setChangeColor(() => {
              setOnGeneral('#1e1e1e');
              setOnEducation('#777777');
              setHideExperience('#1e1e1e');
            });
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
  const [onGeneral, setOnGeneral] = useState('');
  const [onEducation, setOnEducation] = useState('');
  const [onExperience, setOnExperience] = useState('');

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
            setOnGeneral={setOnGeneral}
            setOnEducation={setOnEducation}
            setOnExperience={setOnExperience}
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
