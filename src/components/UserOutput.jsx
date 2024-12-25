function GeneralOutput({ generalName, generalEmail, generalPhoneNumber }) {
  return (
    <>
      <h1>{generalName}</h1>
      <p>{generalEmail}</p>
      <p>{generalPhoneNumber}</p>
    </>
  );
}

function EducationOutput({
  educationName,
  educationLocation,
  educationStartDate,
  educationEndDate,
}) {
  return (
    <>
      <p>{educationName}</p>
      <p>{educationLocation}</p>
      <p>{educationStartDate}</p>
      <p>{educationEndDate}</p>
    </>
  );
}

export default function UserOutput({
  generalName,
  generalEmail,
  generalPhoneNumber,
}) {
  return (
    <>
      <div className="general-output">
        <GeneralOutput
          generalName={generalName}
          generalEmail={generalEmail}
          generalPhoneNumber={generalPhoneNumber}
        />
      </div>
      <div className="education-output"></div>
    </>
  );
}

export { EducationOutput };
