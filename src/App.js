import React, { useState, useEffect } from 'react';
import NewUser from './components/NewUser';

// https://rest-api-without-db.herokuapp.com/users
// /users -> GET -> {id, username, email}
// /users/ -> POST -> {username, email}
// /users/:id -> PUT -> update the user
// /users/:id -> DELETE -> delete the user

// CRUD -> CREATE(POST), READ(GET), UPDATE(PUT/PATCH), DELETE

const API_URL = 'https://rest-api-without-db.herokuapp.com/users';

const App = () => {
  const [users, setUsers] = useState([]);

  const getAllUsers = () => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setUsers(data.users))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  const handleDelete = (id) => {
    fetch(API_URL + `/${id}`, {
      method: 'DELETE'
    })
      .then(() => getAllUsers())
      .catch((error) => console.log(error));
  };

  const handleAddUser = (newUser) => {
    fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUser)
    })
      .then(() => getAllUsers())
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h1>User Managemenet App</h1>
      <NewUser onHandleAddUser={handleAddUser} />
      <section className="users">
        {users.map((user) => {
          const { id, username, email } = user;
          return (
            <article key={id} className="user">
              <h4>{username}</h4>
              <p>{email}</p>
              <button>Edit</button>
              <button
                onClick={() => {
                  handleDelete(id);
                }}>
                Delete
              </button>
            </article>
          );
        })}
      </section>
    </div>
  );
};

export default App;
