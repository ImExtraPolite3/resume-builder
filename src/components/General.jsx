export default function General({ hideGeneral, onGeneral }) {
  return (
    <div
      className="general"
      style={{ display: hideGeneral, backgroundColor: onGeneral }}
    >
      <h1>General</h1>
    </div>
  );
}
