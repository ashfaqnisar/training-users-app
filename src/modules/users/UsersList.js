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
    return (
        <div>
            <h2>Users Lists</h2>
            {usersListData.map((user) => {
                return <UserItem key={user.id} {...user} />
            })}
        </div>
    );
};

export default UsersList;