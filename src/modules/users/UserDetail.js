import axios from "axios";
import useSWR from "swr";
import { useParams } from "react-router-dom";

const fetcher = (url) => {
    return axios.get(url).then(res => res.data)
}

const UserDetail = () => {
    const params = useParams();

    const {id} = params;

    const { data: fetchedUser, error } = useSWR(`https://reqres.in/api/users/${id}`, fetcher)

    if (!fetchedUser) return <div>loading...</div>
    if (error) return <div>failed to load</div>

    const userData = fetchedUser?.data ?? {};

    return (
        <div>
            <h2>Users Detail</h2>
            <div style={{
                marginTop: 15,
                marginBottom: 15, 
            }}>
                <img src={userData.avatar} style={{width: 250}} alt="avatar" />
                <p>User Id: {userData?.id ?? ""}</p>
                <h3>
                    {userData?.first_name ?? ""} {userData?.last_name ?? ""}
                </h3>
                <h4> {userData?.email ?? "Default Age"}</h4>
                <h5>Mobile: 85154574547</h5>
            </div>
        </div>
    );
};

export default UserDetail;