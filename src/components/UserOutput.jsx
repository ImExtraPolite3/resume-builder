export default function UserOutput({
  showFirstName,
  showLastName,
  showEmail,
  showPhoneNumber,
  showSummary,
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
      <div className="resume-education">
        <p>institution</p>
        <p>major</p>
        <p>degree</p>
        <p>school location</p>
        <p>start date</p>
        <p>end date</p>
      </div>
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
