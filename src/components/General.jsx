const generalInfo = {
  idName: ['name', 'email', 'phoneNumber'],
  type: ['text', 'email', 'number'],
  generalName: ['NAME', 'EMAIL', 'PHONE NUMBER'],
};

function CreateInfo({ idName, type, onChange, generalName }) {
  return (
    <>
      <label htmlFor={idName}>{generalName}</label>
      <input type={type} id={idName} onChange={onChange} />
    </>
  );
}

export default function GeneralInfo({ onChange }) {
  return generalInfo.idName.map((info, index) => {
    return (
      <CreateInfo
        key={index}
        idName={info}
        generalName={generalInfo.generalName[index]}
        type={generalInfo.type[index]}
        onChange={onChange}
      />
    );
  });
}
