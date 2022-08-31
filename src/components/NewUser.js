import React, { useState } from 'react';
import PropTypes from 'prop-types';
const NewUser = ({ onHandleAddUser }) => {
  const [user, setUser] = useState({
    username: '',
    email: ''
  });
  const handleChange = (e) => {
    const fieldName = e.target.name;
    setUser((prevState) => {
      return { ...prevState, [fieldName]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onHandleAddUser(user);
    setUser({
      username: '',
      email: ''
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-field">
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          name="username"
          id="username"
          onChange={handleChange}
          value={user.username}
          required
        />
      </div>
      <div className="form-field">
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={handleChange}
          value={user.email}
          required
        />
      </div>
      <button type="submit">Add User</button>
    </form>
  );
};

NewUser.propTypes = {
  onHandleAddUser: PropTypes.func
};

export default NewUser;
