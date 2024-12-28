const educationInfo = {
  idName: ['schoolName', 'schoolLocation', 'schoolStartDate', 'schoolEndDate'],
  type: ['input', 'input', 'date', 'date'],
  educationName: ['SCHOOL NAME', 'SCHOOL LOCATION', 'START DATE', 'END DATE'],
};

function CreateInfo({ idName, type, onChange, educationName }) {
  return (
    <>
      <label htmlFor={idName}>{educationName}</label>
      <input type={type} id={idName} onChange={onChange} />
    </>
  );
}

export default function EducationInfo({ onChange }) {
  return educationInfo.idName.map((name, index) => {
    return (
      <CreateInfo
        key={index}
        type={educationInfo.type[index]}
        educationName={educationInfo.educationName[index]}
        idName={name}
        onChange={onChange}
      />
    );
  });
}
