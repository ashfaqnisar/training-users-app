import axios from "axios"

import { usersListData } from "../../data/users";

const UserItem = (props) => {
    return (
        <div style={{
            marginTop: 15,
            marginBottom: 15
        }}>
            <img src={props.avatar} alt="avatar" />
            <h3>
                {props?.first_name ?? ""} {props?.last_name ?? ""}
            </h3>
            <h4> {props?.email ?? "Default Age"}</h4>
        </div>
    )
}

const UsersList = () => {

    const fetchData = () => {
        console.log("fetching the data")
        axios({
          method: "GET",
          url: "https://reqres.in/api/users",
        })
          .then(response => console.log(response.data.data))
          .catch(error => console.log(error))
      }

    return (
        <div>
            <h2>Users Lists</h2>
            <button onClick={fetchData}> Refresh List</button>

            {usersListData.map((user) => {
                return <UserItem key={user.id} {...user} />
            })}
        </div>
    );
};

export default UsersList;