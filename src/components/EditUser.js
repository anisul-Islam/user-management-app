import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const NewUser = ({ currentUser, onHandleEditUser }) => {
  const [user, setUser] = useState({
    username: '',
    email: ''
  });

  useEffect(() => {
    setUser({
      username: currentUser.username,
      email: currentUser.email
    });
  }, [currentUser]);

  const handleChange = (e) => {
    const fieldName = e.target.name;
    setUser((prevState) => {
      return { ...prevState, [fieldName]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onHandleEditUser(currentUser.id, user);
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
      <button type="submit">Edit User</button>
    </form>
  );
};

NewUser.propTypes = {
  onHandleEditUser: PropTypes.func,
  currentUser: PropTypes.object
};

export default NewUser;
