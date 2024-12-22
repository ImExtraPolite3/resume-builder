export default function GeneralInfo({ fullName, email, phoneNumber }) {
  return (
    <div className="general-info">
      <input type="text" onChange={(e) => fullName(e.target.value)} />
      <input type="text" onChange={(e) => email(e.target.value)} />
      <input type="text" onChange={(e) => phoneNumber(e.target.value)} />
    </div>
  );
}
