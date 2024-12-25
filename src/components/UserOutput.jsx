function GeneralOutput({ generalName, generalEmail, generalPhoneNumber }) {
  return (
    <>
      <h1>{generalName}</h1>
      <p>{generalEmail}</p>
      <p>{generalPhoneNumber}</p>
    </>
  );
}

export default function UserOutput({
  generalName,
  generalEmail,
  generalPhoneNumber,
}) {
  return (
    <>
      <GeneralOutput
        generalName={generalName}
        generalEmail={generalEmail}
        generalPhoneNumber={generalPhoneNumber}
      />
    </>
  );
}
