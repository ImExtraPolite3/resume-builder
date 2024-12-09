export default function General({
  hideGeneral,
  onGeneral,
  setFirstName,
  setLastName,
  setEmail,
  setPhoneNumber,
  setSummary,
}) {
  return (
    <div
      className="general"
      style={{ display: hideGeneral, backgroundColor: onGeneral }}
    >
      <div>
        <label htmlFor="first-name">First Name: </label>
        <input
          type="text"
          id="first-name"
          placeholder="John"
          onChange={setFirstName}
        />
      </div>
      <div>
        <label htmlFor="last-name">Last Name: </label>
        <input
          type="text"
          id="last-name"
          placeholder="Doe"
          onChange={setLastName}
        />
      </div>
      <div>
        <label htmlFor="get-email">Email: </label>
        <input
          type="email"
          name="get-email"
          id="get-email"
          placeholder="johndoe@email.com"
          onChange={setEmail}
        />
      </div>
      <div>
        <label htmlFor="get-phone-number">Phone Number: </label>
        <input
          type="number"
          name="get-phone-number"
          id="get-phone-number"
          placeholder="123-456-7890"
          onChange={setPhoneNumber}
        />
      </div>
      <div>
        <label htmlFor="summary">Summary: </label>
        <textarea
          name="summary"
          id="summary"
          placeholder="I am very hardworking..."
          onChange={setSummary}
        ></textarea>
      </div>
    </div>
  );
}
