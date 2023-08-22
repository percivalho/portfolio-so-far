import React, { useState } from 'react';
// Here we import a helper function that will check if the email is valid
import { validateEmail } from '../../utils/helpers';

const mainstyle = {
  display: "flex",
  flexDirection: "column",
  minHeight: "80vh",
  flex: 1,
  padding: "5%",
}

const formStyle = {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  maxWidth: "400px",
  padding: 10,
  margin: '0 auto',
};

const inputStyle = {
  padding: "0.5em",
  border: "1px solid #ccc",
  borderRadius: "4px",
  fontSize: "1em",
};

const buttonStyle = {
  padding: "0.5em 1em",
  background: "#0096c7",
  color: "white",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
};

const errorStyle = {
  color: "red",
  marginTop: "1em",
};

function Contact() {

  const formData = { fullname: '', email: '', message: "" };
  // Here we set two state variables for firstName and lastName using `useState`
  const [data, setData] = useState(formData);
  const [errorMessage, setErrorMessage] = useState('');
  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
    setErrorMessage('');
  };
  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();
    // Alert the user their first and last name, clear the inputs
    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!data.message) {
      setErrorMessage('message is required');
      return
    }
    if (!data.fullname) {
      setErrorMessage('Please input your name');
      return
    }
    if (!data.email) {
      setErrorMessage('Please input your email');
      return
    }
    if (!validateEmail(data.email)) {
      setErrorMessage('your email is invalid');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }
    alert(`Thank you for your message, ${data.fullName}`);
    setData(formData);
  };



  return (
    <div style={mainstyle}>
      <h1>Contact Me</h1>
      <form className="form" style={formStyle}>
        <label htmlFor="name">Name:</label>
        <input
          value={data.fullname}
          name="fullname"
          onChange={handleInputChange}
          type="text"
          placeholder="fullname"
          style={inputStyle}
        />
        <label htmlFor="email">Email:</label>
        <input
          value={data.email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
          style={inputStyle}
        />
        <label htmlFor="message">Message:</label>
        <textarea
          value={data.message}
          name="message"
          onChange={handleInputChange}
          type="message"
          placeholder="message"
          style={inputStyle}
        />
        {errorMessage && (
          <div>
            <p className="error-text" style={errorStyle}>{errorMessage}</p>
          </div>
        )}
        < button type="button" onClick={handleFormSubmit} style={buttonStyle}>
          Submit
        </button>
      </form>

    </div >
  );
}

export default Contact;