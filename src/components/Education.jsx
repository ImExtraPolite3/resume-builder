const educationInfo = {
  idName: ['schoolName', 'schoolLocation', 'schoolStartDate', 'schoolEndDate'],
  type: ['input', 'input', 'date', 'date'],
};

function CreateInfo({ idName, type, onChange }) {
  return <input type={type} id={`${idName}`} onChange={onChange} />;
}

export default function EducationInfo({ onChange }) {
  return educationInfo.idName.map((name, index) => {
    return (
      <CreateInfo
        key={index}
        type={educationInfo.type[index]}
        idName={name}
        onChange={onChange}
      />
    );
  });
}
