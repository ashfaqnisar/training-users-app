import './App.css';
import "./typography.css"

import { BrowserRouter,  Routes, Route, Link } from "react-router-dom";

import UsersList from './modules/users/UsersList';
import UserDetail from './modules/users/UserDetail';


// import { usersListData, specificUserData } from './data/users';


const App = () => {

  return (
    <div>
      <BrowserRouter>
        <h1>Users App</h1>
        <Link to="/users">Users Page</Link>
        <Link to="/users/1">user detail page</Link>
        <Routes>
          <Route path="/users" element={<UsersList />} />
          <Route path="/users/:id" element={<UserDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
