export default function Experience({ hideExperience, onExperience }) {
  return (
    <div
      className="experience"
      style={{ display: hideExperience, backgroundColor: onExperience }}
    >
      <h1>Experience</h1>
    </div>
  );
}
