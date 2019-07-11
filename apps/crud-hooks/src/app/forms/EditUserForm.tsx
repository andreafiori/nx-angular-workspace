import * as React from 'react';
import { useState, useEffect } from 'react';

const EditUserForm = props => {
  const [ user, setUser ] = useState(props.currentUser);

  useEffect(
    () => {
      setUser(props.currentUser);
    },
    [ props ]
  )
  // You can tell React to skip applying an effect if certain values haven’t changed between re-renders. [ props ]

  const handleInputChange = event => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault();

        props.updateUser(user.id, user)
      }}
    >

      <div className="form-group">
        <label htmlFor="name-edit">Name</label>
        <input type="text" className="form-control" id="name-edit" name="name" value={user.name} onChange={handleInputChange} required />
      </div>
      
      <div className="form-group">
        <label htmlFor="username-edit">Username</label>
        <input type="text" className="form-control" id="username-edit" name="username" value={user.username} onChange={handleInputChange} required />
      </div>

      <button className="btn btn-primary">Update user</button>

      <button className="btn btn-danger" onClick={() => props.setEditing(false)}>
        Cancel
      </button>

    </form>
  )
}

export default EditUserForm;
