const inputId = ['full-name', 'get-email', 'get-phone-number'];
const inputName = ['Full Name', 'Email', 'Phone Number'];
const inputType = ['text', 'email', 'number'];

function Inputs({ inputId, num, inputName, inputType }) {
  return (
    <div>
      <label htmlFor={`${inputId}${num}`}>{inputName}</label>
      <input type={inputType} id={`${inputId}${num}`} />
    </div>
  );
}

export default function CreateGeneralInputs() {
  return (
    <div className="general">
      {inputName.map((eachInput, index) => {
        return (
          <Inputs
            key={index}
            inputName={eachInput}
            num={index}
            inputType={inputType[index]}
            inputId={inputId[index]}
          />
        );
      })}
      <div key={'summary'}>
        <label htmlFor="summary">Summary</label>
        <textarea name="summary" id="summary"></textarea>
      </div>
    </div>
  );
}
