export default function UserOutput({ firstName }) {
  return (
    <>
      <div className="resume-general">
        <h1>{firstName}</h1>
        <h1>Last Name</h1>
        <p>email</p>
        <p>phone number</p>
        <p>summary</p>
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
