import axios from "axios"
import useSWR from "swr";
import { useNavigate } from "react-router-dom";

const UserItem = (props) => {

    const navigate = useNavigate();

    const handleUserClick = () => {
        navigate(`/users/${props.id}`)
    }

    return (
        <div 
            style={{
                marginTop: 15,
                marginBottom: 15, 
                cursor: "pointer", 
                display: "inline-block"
            }} 
            onClick={handleUserClick}
        >
            <img src={props.avatar} alt="avatar" />
            <h3>
                {props?.first_name ?? ""} {props?.last_name ?? ""}
            </h3>
            <h4> {props?.email ?? "Default Age"}</h4>
        </div>
    )
}

const fetcher = (url) => {
    return axios.get(url).then(res => res.data)
}

const UsersList = () => {

    const { data: fetchedUsersList, error } = useSWR('https://reqres.in/api/users', fetcher)

    if (error) return <div>failed to load</div>
    if (!fetchedUsersList) return <div>loading...</div>

    return (
        <div>
            <h2>Users Lists</h2>

            {(fetchedUsersList?.data ?? []).map((user) => {
                return <UserItem key={user.id} {...user} />
            })}
        </div>
    );
};

export default UsersList;