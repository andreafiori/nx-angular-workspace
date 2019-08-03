import * as React from 'react';
import { useState, Fragment } from 'react';
import AddUserForm from './forms/AddUserForm';
import EditUserForm from './forms/EditUserForm';
import UserTable from './tables/UserTable';

import './app.scss';

const App = () => {

	const usersData = [
		{ id: 1, name: 'Tania', username: 'floppydiskette' },
		{ id: 2, name: 'Craig', username: 'siliconeidolon' },
		{ id: 3, name: 'Ben', username: 'benisphere' },
	]

	const initialFormState = { id: null, name: '', username: '' }

	// Setting state with Hooks
	const [users, setUsers] = useState(usersData)
	const [currentUser, setCurrentUser] = useState(initialFormState)
	const [editing, setEditing] = useState(false)

	// CRUD operations
	const addUser = user => {
		user.id = users.length + 1;
		setUsers([...users, user]);
	}

	const deleteUser = (id: number) => {
		setEditing(false);

		setUsers(users.filter(user => user.id !== id));
	}

	const updateUser = (id: number, updatedUser: any) => {
		setEditing(false);

		setUsers(users.map(user => (user.id === id ? updatedUser : user)));
	}

	const editRow = (user: User) => {
		setEditing(true);

		setCurrentUser({ id: user.id, name: user.name, username: user.username });
	}

	return (
		<div className="container">
			<h1 className="text-center mt-4 mb-4">CRUD App with Hooks</h1>
			<div className="row">
				<div className="col-sm-12 col-md-6 col-lg-6">
					{editing ? (
						<Fragment>
							<h2>Edit user</h2>
							<EditUserForm
								editing={editing}
								setEditing={setEditing}
								currentUser={currentUser}
								updateUser={updateUser}
							/>
						</Fragment>
					) : (
							<Fragment>
								<h2>Add user</h2>
								<AddUserForm addUser={addUser} />
							</Fragment>
						)}
				</div>
				<div className="col-sm-12 col-md-6 col-lg-6">
					<h2>View users</h2>
					<UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
				</div>
			</div>
		</div>
	)
}

export default App;