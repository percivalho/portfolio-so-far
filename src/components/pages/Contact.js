import React, { useState } from 'react';
// Here we import a helper function that will check if the email is valid
import { checkPassword, validateEmail } from '../../utils/helpers';



function Contact() {

  const formData = { fullname: '', email: '', message: "" };
  // Here we set two state variables for firstName and lastName using `useState`
  const [data, setData] = useState(formData);
  const [errorMessage, setErrorMessage] = useState('');
  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();
    // Alert the user their first and last name, clear the inputs
    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(data.email) || !data.message || !data.fullname) {
      setErrorMessage('Email or username is invalid');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }
    //alert(`Hello ${data.firstName} ${data.lastName}`);
    setData(formData);
  };



  return (
    <div>
      <h1>Contact Me</h1>
      <form className="form">
        <div>
          <label htmlFor="name">Name:</label>
          <input
            value={data.fullname}
            name="fullname"
            onChange={handleInputChange}
            type="text"
            placeholder="fullname"
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            value={data.email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="email"
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            value={data.message}
            name="message"
            onChange={handleInputChange}
            type="message"
            placeholder="message"
          />
        </div>
        <button type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Contact;