import React, { useState } from 'react';


const Project = () => {
  const [formData, setFormData] = useState({
    projectName: '',
    projectDescription: '',
    projectLink: ''
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
    if (!data.projectName.trim()) {
      errors.projectName = 'Project Name is required';
    }
    if (!data.projectDescription.trim()) {
      errors.projectDescription = 'Project Description is required';
    }
    if (!data.projectLink.trim()) {
      errors.projectLink = 'Project Link is required';
    } else if (!/^https?:\/\/\S+$/.test(data.projectLink)) {
      errors.projectLink = 'Project Link is invalid';
    }
    return errors;
  };

  return (
    <div className="project-form-container">
      <h2>Submit Your Project</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label htmlFor="projectName">Project Name:</label>
          <input
            type="text"
            id="projectName"
            name="projectName"
            value={formData.projectName}
            onChange={handleChange}
          />
          {errors.projectName && <span className="error">{errors.projectName}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="projectDescription">Project Description:</label>
          <textarea
            id="projectDescription"
            name="projectDescription"
            value={formData.projectDescription}
            onChange={handleChange}
          />
          {errors.projectDescription && <span className="error">{errors.projectDescription}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="projectLink">Project Link:</label>
          <input
            type="text"
            id="projectLink"
            name="projectLink"
            value={formData.projectLink}
            onChange={handleChange}
          />
          {errors.projectLink && <span className="error">{errors.projectLink}</span>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Project;
