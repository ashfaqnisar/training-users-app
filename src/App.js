import './App.css';
import "./typography.css"

import UsersList from './modules/users/UsersList';
import UserDetail from './modules/users/UserDetail';

// import { usersListData, specificUserData } from './data/users';


const App = () => {
  return (
    <div>
      <h1>Users App</h1>
      <UsersList />
      <UserDetail />
    </div>
  )
}

export default App;
