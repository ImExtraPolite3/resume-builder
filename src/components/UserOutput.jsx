function EducationSection() {
  return (
    <div className="resume-education">
      <p>institution</p>
      <p>major</p>
      <p>degree</p>
      <p>school location</p>
      <p>start date</p>
      <p>end date</p>
    </div>
  );
}

export default function UserOutput({
  showFirstName,
  showLastName,
  showEmail,
  showPhoneNumber,
  showSummary,
  createEducationSection,
}) {
  return (
    <>
      <div className="resume-general">
        <h1>{showFirstName}</h1>
        <h1>{showLastName}</h1>
        <p>{showEmail}</p>
        <p>{showPhoneNumber}</p>
        <p>{showSummary}</p>
      </div>
      <EducationSection />
      {createEducationSection}
      <div className="resume-experience">
        <p>work title</p>
        <p>company</p>
        <p>office location</p>
        <p>start date</p>
        <p>end date</p>
      </div>
    </>
  );
}

export { EducationSection };
