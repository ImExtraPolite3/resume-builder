const experienceInfo = {
  idName: ['companyName', 'title', 'companyStartDate', 'companyEndDate'],
  type: ['input', 'input', 'date', 'date'],
  experienceName: ['COMPANY NAME', 'TITLE', 'START DATE', 'END DATE'],
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
