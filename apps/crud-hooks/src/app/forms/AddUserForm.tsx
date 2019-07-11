import * as React from 'react';
import { useState } from 'react';

const AddUserForm = props => {
	const initialFormState = { id: null, name: '', username: '' };
	const [ user, setUser ] = useState(initialFormState);

	const handleInputChange = event => {
		const { name, value } = event.target;

		setUser({ ...user, [name]: value });
	}

	return (
		<form
			onSubmit={event => {
				event.preventDefault();
				if (!user.name || !user.username) return;

				props.addUser(user);
				setUser(initialFormState);
			}}
		>

			<div className="form-group">
				<label htmlFor="name">Name</label>
				<input type="text" className="form-control" id="name" name="name" value={user.name} onChange={handleInputChange} required />
			</div>

			<div className="form-group">
				<label htmlFor="username">Username</label>
				<input type="text" className="form-control" id="username" name="username" value={user.username} onChange={handleInputChange} required />
			</div>

			<button className="btn btn-primary">Add new user</button>
			
		</form>
	)
}

export default AddUserForm;
