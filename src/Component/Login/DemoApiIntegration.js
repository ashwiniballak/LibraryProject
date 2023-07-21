import react, { useEffect, useState } from "react";
import axios from "axios";
const Login = () => {
  const [userList, setUserList] = useState([]);
  const addNewRecord = () => {
    axios.post("https://jsonplaceholder.typicode.com/posts", {
        userId: "111",
        id: "2444",
        title: "test title",
        body: "This is body",
        name: "Ashwini",
      })
      .then((responce) => {
        setUserList([...userList, responce.data]);
        console.log("Post Response", responce);
      });
  };
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUserList(response.data);
        console.log("response", response);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);

  
  return (
    <>
      <h2>Welcome To Library</h2>
      <div className="container">
        <table>
          {userList &&
            userList.length > 0 &&
            userList.map((user) => (
              <tr>
                <td>{user.id}</td>
                <td> {user.name} </td>
                {/* <td>{user.address.city}</td> */}
              </tr>
            ))}
        </table>

        <button type="button" class="btn btn-success" onClick={addNewRecord}>
          Add New Record
        </button>
      </div>
    </>
  );
};
export default Login;
