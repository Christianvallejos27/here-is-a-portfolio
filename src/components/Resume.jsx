import React, { useState } from 'react';


const Resume = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    address: '',
    summary: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm(formData);
    if (Object.keys(errors).length === 0) {
      // Form submission logic
      console.log('Form submitted successfully!', formData);
    } else {
      setErrors(errors);
    }
  };

  const validateForm = (data) => {
    let errors = {};
    if (!data.fullName.trim()) {
      errors.fullName = 'Full Name is required';
    }
    if (!data.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = 'Email is invalid';
    }
    if (!data.phoneNumber.trim()) {
      errors.phoneNumber = 'Phone Number is required';
    } else if (!/^\d{10}$/.test(data.phoneNumber)) {
      errors.phoneNumber = 'Phone Number is invalid';
    }
    if (!data.address.trim()) {
      errors.address = 'Address is required';
    }
    if (!data.summary.trim()) {
      errors.summary = 'Summary is required';
    }
    return errors;
  };

  return (
    <div className="resume-form-container">
      <h2>Submit Your Resume</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
          {errors.fullName && <span className="error">{errors.fullName}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
          {errors.phoneNumber && <span className="error">{errors.phoneNumber}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
          {errors.address && <span className="error">{errors.address}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="summary">Summary:</label>
          <textarea
            id="summary"
            name="summary"
            value={formData.summary}
            onChange={handleChange}
          />
          {errors.summary && <span className="error">{errors.summary}</span>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Resume;
