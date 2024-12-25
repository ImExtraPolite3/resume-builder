const generalInfo = {
  idName: ['full-name', 'email', 'phone-number'],
  type: ['text', 'email', 'number'],
};

function CreateInfo({ idName, type, onChange }) {
  return <input type={type} id={idName} onChange={onChange} />;
}

export default function GeneralInfo({ onChange }) {
  return (
    <div className="general-info">
      {generalInfo.idName.map((info, index) => {
        return (
          <CreateInfo
            key={index}
            idName={info}
            type={generalInfo.type[index]}
            onChange={onChange}
          />
        );
      })}
    </div>
  );
}
