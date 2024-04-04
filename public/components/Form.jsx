import { useState } from "react";
import "../css/form.css";

const Form = () => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [occupation, setOccupation] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [address, setAddress] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Add your information</h2>
      <form onSubmit={handleSubmit}>
        <div className="section-contact-form">
          <div className="form-field">
            <label htmlFor="first-name" className="form-label">First Name:</label>
            <input
              id="first-name"
              name="first-name"
              type="text"
              placeholder="First Name"
              className="form-input"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>

          <div className="form-field">
            <label htmlFor="last-name" className="form-label">
              Last Name:
            </label>
            <input
              id="last-name"
              name="last-name"
              type="text"
              placeholder="Last Name"
              className="form-input"
              value={lastName}
              onChange={e => setLastName(e.target.value)}
            />
          </div>
          <div className="form-field">
            <label htmlFor="occupation" className="form-label">
              Occupation:
            </label>
            <input
              id="occupation"
              name="occupation"
              type="text"
              placeholder="Occupation - Role - Profession"
              className="form-input"
              value={occupation}
              onChange={e => setOccupation(e.target.value)}
            />
          </div>

          <div className="form-field">
            <label htmlFor="address" className="form-label">
              Address:
            </label>
            <input
              id="address"
              name="address"
              type="text"
              placeholder="Address"
              className="form-input"
              value={address}
              onChange={e => setAddress(e.target.value)}
            />
          </div>

          <div className="form-field">
            <label htmlFor="phone" className="form-label">
              Phone:
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="Phone"
              className="form-input"
              value={phone}
              onChange={e => setPhone(e.target.value)}
            />
          </div>

          <div className="form-field">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              className="form-input"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>

          <div className="form-field">
            <label htmlFor="linkedin" className="form-label">
              LinkedIn:
            </label>
            <input
              id="linkedin"
              name="linkedin"
              type="text"
              placeholder="LinkedIn"
              className="form-input"
              value={linkedin}
              onChange={e => setLinkedinsetLinkedin(e.target.value)}
            />
          </div>

          <button type="submit" className="submit-button">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};


export default Form;
