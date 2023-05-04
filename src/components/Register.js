import React, { useState } from "react";
import './Form.css'


const RegistrationForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate()) {
      // Handle registration form submission here
      console.log("Registration form submitted");
    }
  };

  const validate = () => {
    let nameError = "";
    let emailError = "";
    let phoneError = "";

    if (!name) {
      nameError = "Name is required";
    }

    if (!email) {
      emailError = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      emailError = "Invalid email format";
    }

    if (!phone) {
      phoneError = "Phone number is required";
    } else if (!/^\d{10}$/.test(phone)) {
      phoneError = "Invalid phone number format";
    }

    setNameError(nameError);
    setEmailError(emailError);
    setPhoneError(phoneError);

    return !nameError && !emailError && !phoneError;
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          className={nameError ? "form-control error" : "form-control"}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {nameError && <div className="error-message">{nameError}</div>}
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          className={emailError ? "form-control error" : "form-control"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {emailError && <div className="error-message">{emailError}</div>}
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone number:</label>
        <input
          type="tel"
          id="phone"
          className={phoneError ? "form-control error" : "form-control"}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        {phoneError && <div className="error-message">{phoneError}</div>}
      </div>
      <button type="submit" className="btn btn-primary">
        Register
      </button>
    </form>
  );
};

export default RegistrationForm;
