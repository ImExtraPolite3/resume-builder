export default function General() {
  return (
    <div className="general">
      <label htmlFor="first-name">First Name: </label>
      <input type="text" id="first-name" />

      <label htmlFor="last-name">Last Name: </label>
      <input type="text" id="last-name" />

      <label htmlFor="get-email">Email: </label>
      <input type="email" name="get-email" id="get-email" />
    </div>
  );
}
