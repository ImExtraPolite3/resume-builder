export default function GeneralInfo({ fullName, email, phoneNumber }) {
  return (
    <div className="general-info">
      <input type="text" onChange={(e) => fullName(e.target.value)} />
      <input type="email" onChange={(e) => email(e.target.value)} />
      <input type="number" onChange={(e) => phoneNumber(e.target.value)} />
    </div>
  );
}
