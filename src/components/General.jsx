import GeneralOutput from './UserOutput';

const generalInput = {
  class: ['full-name', 'email', 'phone-number'],
};

function Inputs({ idName, onChange }) {
  return <input type="text" className={idName} onChange={onChange} />;
}

export default function GeneralInput({ onChange, inputValue }) {
  return generalInput.class.map((name, index) => {
    return (
      <>
        <Inputs
          key={index}
          idName={name}
          value={inputValue[index]}
          onChange={(e) => onChange(e, index)}
        />
      </>
    );
  });
}
