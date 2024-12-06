export default function Experience({ expNum }) {
  return (
    <div>
      <h2>Company {expNum}</h2>
      <div>
        <div>
          <label htmlFor="work-title">Title:</label>
          <input type="text" id="work-title" />
        </div>
        <div>
          <label htmlFor="company">Company</label>
          <input type="text" id="company" />
        </div>
        <div>
          <label htmlFor="office-location">Office Location</label>
          <input type="text" id="office-location" />
        </div>
        <div>
          <label htmlFor="start-date">Start Date:</label>
          <input type="date" id="start-date" />
        </div>
        <div>
          <label htmlFor="end-date">End Date:</label>
          <input type="date" id="end-date" />
        </div>
      </div>
      <button className="create-resume">Create Resume</button>
    </div>
  );
}
