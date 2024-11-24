import Education from './components/Education';
import Experience from './components/Experience';
import General from './components/General';

function App() {
  return (
    <>
      <h1>CV Application</h1>
      <section className="user-input">
        <div className="section-buttons">
          <button className="show-general">General</button>
          <button className="show-education">Education</button>
          <button className="show-experience">Experience</button>
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
