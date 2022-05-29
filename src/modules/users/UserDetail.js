import { specificUserData } from "../../data/users";

const UserDetail = () => {
    const userData = specificUserData;
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