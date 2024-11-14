const getIdName = [
  'work-title',
  'company',
  'office-location',
  'start-date',
  'end-date',
];

const getName = [
  'Title:',
  'Company:',
  'Office Location:',
  'Start Date:',
  'End Date:',
];

function CreateGeneralContent({ idName, name }) {
  return (
    <div>
      <label htmlFor={idName}>{name}</label>
      <input type="text" id={idName} />
    </div>
  );
}

function GeneralContent() {
  return getIdName.map((eachIdName, index) => {
    return <CreateGeneralContent idName={eachIdName} name={getName[index]} />;
  });
}

export default function Experience() {
  return (
    <div className="experience">
      <h1>Experience</h1>
      <button className="create-new-experience">+</button>
      <div>
        <GeneralContent />
      </div>
    </div>
  );
}
