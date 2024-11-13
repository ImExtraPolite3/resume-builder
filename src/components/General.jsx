export default function General({ generalInfo, onGeneralInfoChange }) {
  const handleFirstName = (e) => {
    onGeneralInfoChange({
      ...generalInfo,
      firstName: e.target.value,
    });
  };

  const handleLastName = (e) => {
    onGeneralInfoChange({
      ...generalInfo,
      lastName: e.target.value,
    });
  };

  const handleEmail = (e) => {
    onGeneralInfoChange({
      ...generalInfo,
      email: e.target.value,
    });
  };

  const handlePhoneNumber = (e) => {
    onGeneralInfoChange({
      ...generalInfo,
      phoneNumber: e.target.value,
    });
  };

  const handleSummary = (e) => {
    onGeneralInfoChange({
      ...generalInfo,
      summary: e.target.value,
    });
  };

  return (
    <div className="general">
      <h1>General</h1>
      <div>
        <label htmlFor="first-name">First Name: </label>
        <input
          type="text"
          id="first-name"
          value={generalInfo.firstName}
          onChange={handleFirstName}
        />
      </div>
      <div>
        <label htmlFor="last-name">Last Name: </label>
        <input
          type="text"
          id="last-name"
          value={generalInfo.lastName}
          onChange={handleLastName}
        />
      </div>
      <div>
        <label htmlFor="get-email">Email: </label>
        <input
          type="email"
          name="get-email"
          id="get-email"
          value={generalInfo.email}
          onChange={handleEmail}
        />
      </div>
      <div>
        <label htmlFor="get-phone-number">Phone Number: </label>
        <input
          type="number"
          name="get-phone-number"
          id="get-phone-number"
          value={generalInfo.phoneNumber}
          onChange={handlePhoneNumber}
        />
      </div>
      <div>
        <label htmlFor="summary">Summary: </label>
        <textarea
          name="summary"
          id="summary"
          value={generalInfo.summary}
          onChange={handleSummary}
        ></textarea>
      </div>
    </div>
  );
}
