export default function EducationInfo({
  schoolName,
  major,
  startDate,
  endDate,
}) {
  return (
    <>
      <input type="text" onChange={(e) => schoolName(e.target.value)} />
      <input type="text" onChange={(e) => major(e.target.value)} />
      <input type="date" onChange={(e) => startDate(e.target.value)} />
      <input type="date" onChange={(e) => endDate(e.target.value)} />
    </>
  );
}
