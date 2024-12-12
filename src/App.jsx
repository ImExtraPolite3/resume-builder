import CreateGeneralInputs from './components/General';
import UserOutput from './components/UserOutput';

function App() {
  return (
    <div className="full-page">
      <div className="user-input">
        <CreateGeneralInputs />
      </div>
      <div className="user-output">
        <UserOutput />
      </div>
    </div>
  );
}

export default App;
