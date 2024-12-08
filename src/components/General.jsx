import { useState } from 'react';

export default function General({ hideGeneral, onGeneral }) {
  const [firstName, setFirstName] = useState('');

  return (
    <div
      className="general"
      style={{ display: hideGeneral, backgroundColor: onGeneral }}
    >
      <div>
        <label htmlFor="first-name">First Name: </label>
        <input
          type="text"
          id="first-name"
          placeholder="John"
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
      </div>
      <div>
        <label htmlFor="last-name">Last Name: </label>
        <input type="text" id="last-name" placeholder="Doe" />
      </div>
      <div>
        <label htmlFor="get-email">Email: </label>
        <input
          type="email"
          name="get-email"
          id="get-email"
          placeholder="johndoe@email.com"
        />
      </div>
      <div>
        <label htmlFor="get-phone-number">Phone Number: </label>
        <input
          type="number"
          name="get-phone-number"
          id="get-phone-number"
          placeholder="123-456-7890"
        />
      </div>
      <div>
        <label htmlFor="summary">Summary: </label>
        <textarea
          name="summary"
          id="summary"
          placeholder="I am very hardworking..."
        ></textarea>
      </div>
    </div>
  );
}
