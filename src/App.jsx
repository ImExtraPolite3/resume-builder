import General from './components/General';
import Education from './components/Education';

function App() {
  return (
    <>
      <section className="user-input">
        <General />
        <Education />
      </section>
      <section className="user-output"></section>
    </>
  );
}

export default App;
