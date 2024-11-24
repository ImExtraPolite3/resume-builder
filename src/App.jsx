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

function CreateButtons() {
  return buttonName.map((eachButton, index) => {
    return (
      <ButtonProp
        key={index}
        name={eachButton}
        whenClick={() => {
          console.log('hello');
        }}
      />
    );
  });
}

function App() {
  return (
    <>
      <h1>CV Application</h1>
      <section className="user-input">
        <div className="section-buttons">
          <CreateButtons />
        </div>
        <div className="section-input">
          <General />
          <Education />
          <Experience />
        </div>
      </section>
    </>
  );
}

export default App;
