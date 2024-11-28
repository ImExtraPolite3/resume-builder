export default function General({ hideGeneral, onGeneral }) {
  return (
    <div
      className="general"
      style={{ display: hideGeneral, backgroundColor: onGeneral }}
    >
      <div>
        <label htmlFor="first-name">First Name: </label>
        <input type="text" id="first-name" />
      </div>
      <div>
        <label htmlFor="last-name">Last Name: </label>
        <input type="text" id="last-name" />
      </div>
      <div>
        <label htmlFor="get-email">Email: </label>
        <input type="email" name="get-email" id="get-email" />
      </div>
      <div>
        <label htmlFor="get-phone-number">Phone Number: </label>
        <input type="number" name="get-phone-number" id="get-phone-number" />
      </div>
      <div>
        <label htmlFor="summary">Summary: </label>
        <textarea name="summary" id="summary"></textarea>
      </div>
    </div>
  );
}
