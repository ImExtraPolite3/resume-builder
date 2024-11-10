import General from './components/General';
import Education from './components/Education';
import Experience from './components/Experience';

function App() {
  return (
    <>
      <section className="user-input">
        <General />
        <Education />
        <Experience />
      </section>
      <section className="user-output"></section>
    </>
  );
}

export default App;
