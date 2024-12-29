const experienceInfo = {
  idName: [
    'companyName',
    'companyLocation',
    'companyStartDate',
    'companyEndDate',
  ],
  type: ['input', 'input', 'date', 'date'],
  experienceName: [
    'COMPANY NAME',
    'COMPANY LOCATION',
    'START DATE',
    'END DATE',
  ],
};

function Experience({ idName, type, onChange, experienceName }) {
  return (
    <>
      <label htmlFor={idName}>{experienceName}</label>
      <input type={type} id={idName} onChange={onChange} />
    </>
  );
}

export default function ExperienceInfo({ onChange }) {
  return experienceInfo.idName.map((id, index) => {
    return (
      <Experience
        key={index}
        type={experienceInfo.type[index]}
        experienceName={experienceInfo.experienceName[index]}
        idName={id}
        onChange={onChange}
      />
    );
  });
}
