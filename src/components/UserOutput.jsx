function General({ generalName, generalEmail, generalPhoneNumber }) {
  return (
    <>
      <h1>{generalName}</h1>
      <p>{generalEmail}</p>
      <p>{generalPhoneNumber}</p>
    </>
  );
}

function EducationOutput({
  educationMajor,
  educationName,
  educationStartDate,
  educationEndDate,
}) {
  return (
    <>
      <p>{educationName}</p>
      <p>{educationMajor}</p>
      <p>{educationStartDate}</p>
      <p>{educationEndDate}</p>
    </>
  );
}

function ExperienceOutput({
  companyName,
  title,
  companyStartDate,
  companyEndDate,
}) {
  return (
    <>
      <p>{companyName}</p>
      <p>{title}</p>
      <p>{companyStartDate}</p>
      <p>{companyEndDate}</p>
    </>
  );
}

export default function GeneralOutput({
  generalName,
  generalEmail,
  generalPhoneNumber,
}) {
  return (
    <General
      generalName={generalName}
      generalEmail={generalEmail}
      generalPhoneNumber={generalPhoneNumber}
    />
  );
}

export { EducationOutput, ExperienceOutput };
