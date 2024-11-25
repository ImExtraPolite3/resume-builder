export default function Education({ hideEducation, onEducation }) {
  return (
    <div
      className="education"
      style={{ display: hideEducation, backgroundColor: onEducation }}
    >
      <h1>Education</h1>
    </div>
  );
}
