export default function General() {
  return (
    <div className="general">
      <label htmlFor="first-name">First Name: </label>
      <input type="text" id="first-name" />

      <label htmlFor="last-name">Last Name: </label>
      <input type="text" id="last-name" />

      <label htmlFor="get-email">Email: </label>
      <input type="email" name="get-email" id="get-email" />

      <label htmlFor="get-phone-number">Phone Number: </label>
      <input type="number" name="get-phone-number" id="get-phone-number" />

      <label htmlFor="summary">Summary: </label>
      <textarea name="summary" id="summary"></textarea>
    </div>
  );
}
