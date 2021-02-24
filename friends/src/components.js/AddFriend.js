import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './../styles/AddFriend.css';
import { axiosWithAuth } from './../utils/axiosWithAuth';

function AddFriend(props) {
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

  const addFriend = () => {
    axiosWithAuth()
      .post('/api/friends', newFriend)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        debugger;
      });
  };

  return (
    <div className="add-friend-container">
      <form className="add-friend-form" onSubmit={addFriend}>
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
        <button>Add Friend!</button>
      </form>
    </div>
  );
}

export default AddFriend;
