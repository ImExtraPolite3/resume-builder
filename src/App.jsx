import GeneralInfo from './components/General';
import UserOutput from './components/UserOutput';

function App() {
  return (
    <>
      <div className="user-input">
        <GeneralInfo />
      </div>
      <div className="user-output">
        <UserOutput />
      </div>
    </>
  );
}

export default App;
