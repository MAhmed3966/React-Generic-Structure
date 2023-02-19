import { getAPICall } from "./axios/axios";
import { USERS_API } from "../constant";
import { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";

const Users = () => {
  const [user, setUser] = useState(null);
  const getUsers = async () => {
    const response = await getAPICall(USERS_API);
    const allUsers = response.data;
    setUser(allUsers);
  };

  useEffect(() => {
    getUsers();
  }, []);
  // getUsers();
  return (
    <>
      Data is
      <table className="table">
        <tr>
          <th scope="col">id</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Email</th>
          <th scope="col">Action</th>
        </tr>
        {user != null &&
          user.map((users) => {
            return (
              <tr>
                <td>{users.id}</td>
                <td> {users.first_name}</td>
                <td> {users.last_name}</td>
                <td> {users.email}</td>
                <td > <div >{<MdDelete />}</div></td>
              </tr>
            );
          })}
      </table>
    </>
  );
};

export default Users;
