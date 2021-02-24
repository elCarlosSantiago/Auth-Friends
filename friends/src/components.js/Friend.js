import React from 'react';

function Friend(props) {
  const { friend } = props;
  return (
    <div className="friend">
      <p>Name:{friend.name}</p>
      <p>Age:{friend.age}</p>
      <p>{friend.email}</p>
    </div>
  );
}

export default Friend;
