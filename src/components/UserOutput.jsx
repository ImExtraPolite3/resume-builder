function GeneralOutput({ generalTitle, generalName, generalAge }) {
  return (
    <>
      <h1>{generalTitle}</h1>
      <p>{generalName}</p>
      <p>{generalAge}</p>
    </>
  );
}

export default function UserOutput({ generalTitle, generalName, generalAge }) {
  return (
    <>
      <GeneralOutput
        generalTitle={generalTitle}
        generalName={generalName}
        generalAge={generalAge}
      />
    </>
  );
}
