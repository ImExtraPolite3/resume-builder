export default function Education() {
  return (
    <div className="education">
      <h1>Education</h1>
      <button>+</button>
      <div>
        <label htmlFor="institution">Institution:</label>
        <input type="text" id="institution" />
      </div>
      <div>
        <label htmlFor="major">Major:</label>
        <input type="text" id="major" />
      </div>
      <div>
        <label htmlFor="degree">Degree:</label>
        <input type="text" id="degree" />
      </div>
      <div>
        <label htmlFor="location">School Location:</label>
        <input type="text" id="location" />
      </div>
      <div>
        <label htmlFor="start-date">Start Date:</label>
        <input type="text" id="start-date" />
      </div>
      <div>
        <label htmlFor="end-date">End Date:</label>
        <input type="text" id="end-date" />
      </div>
    </div>
  );
}
