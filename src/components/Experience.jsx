const experienceInfo = {
  idName: [
    'companyName',
    'companyLocation',
    'companyStartDate',
    'companyEndDate',
  ],
  type: ['input', 'input', 'date', 'date'],
};

function Experience({ idName, type, onChange }) {
  return <input type={type} id={idName} onChange={onChange} />;
}

export default function ExperienceInfo({ onChange }) {
  return experienceInfo.idName.map((id, index) => {
    return (
      <Experience
        key={index}
        type={experienceInfo.type[index]}
        idName={id}
        onChange={onChange}
      />
    );
  });
}
