import React, { useState } from 'react';
import './../styles/AddFriend.css';

function AddFriend() {
  const [newFriend, setNewFriend] = useState({
    id: '',
    name: '',
    age: '',
    email: '',
  });

  const onChange = (evt) => {
    evt.preventDefault();
    setNewFriend({
      ...newFriend,
      [evt.target.name]: evt.target.value,
    });
  };

  return (
    <div className="add-friend-container">
      <form className="add-friend-form">
        <input
          placeholder="Name?"
          type="text"
          name="name"
          onChange={onChange}
          value={newFriend.name}
        />

        <input
          placeholder="Age?"
          type="number"
          name="age"
          onChange={onChange}
          value={newFriend.age}
        />

        <input
          placeholder="E-mail?"
          type="email"
          name="email"
          onChange={onChange}
          value={newFriend.email}
        />
      </form>
    </div>
  );
}

export default AddFriend;
