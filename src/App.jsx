import { useState } from 'react';
import Education from './components/Education';
import Experience from './components/Experience';
import General from './components/General';

const buttonName = ['General', 'Education', 'Experience'];

function ButtonProp({ name, whenClick, changeColor }) {
  return (
    <button
      className={`show-${name}`}
      style={{ backgroundColor: changeColor ? '#777777' : '#1e1e1e' }}
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
  changeColor,
  setChangeColor,
}) {
  return buttonName.map((eachButton, index) => {
    return (
      <ButtonProp
        key={index}
        name={eachButton}
        changeColor={changeColor === eachButton}
        whenClick={() => {
          setChangeColor(eachButton);
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
  const [changeColor, setChangeColor] = useState('General');
  const [clickEducation, setClickEducation] = useState([]);
  const [schoolNum, setSchoolNum] = useState(2);

  const handleClickEducation = () => {
    setClickEducation([
      ...clickEducation,
      <Education key={clickEducation.length} eduNum={schoolNum} />,
    ]);
    setSchoolNum((prevNum) => prevNum + 1);
  };

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
            changeColor={changeColor}
          />
        </div>
        <div className="section-input">
          <General hideGeneral={hideGeneral} />
          <div className="education" style={{ display: hideEducation }}>
            <button onClick={handleClickEducation}>+</button>
            <Education eduNum={1} />
            {clickEducation}
          </div>
          <Experience hideExperience={hideExperience} />
        </div>
      </section>
    </>
  );
}

export default App;
