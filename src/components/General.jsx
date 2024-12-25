const generalInfo = {
  idName: ['name', 'email', 'phoneNumber'],
  type: ['text', 'email', 'number'],
};

function CreateInfo({ idName, type, onChange }) {
  return <input type={type} id={idName} onChange={onChange} />;
}

export default function GeneralInfo({ onChange }) {
  return generalInfo.idName.map((info, index) => {
    return (
      <CreateInfo
        key={index}
        idName={info}
        type={generalInfo.type[index]}
        onChange={onChange}
      />
    );
  });
}
