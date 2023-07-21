import axios from "axios";
import react, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import clonedeep from "lodash.clonedeep";
import { updatedUserList ,setSelectedUserId} from "../../Store/features/userSlice";
import AddNewUser from "./AddNewUser";
import GetUserDetailsSelector from '../../Selectors/GetUserDetailsSelector'

const UserList = () => {
  const AllUserList = useSelector(GetUserDetailsSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addNewUser = () => {
    navigate("/dashboard/add-new-user");
  };
  const editUser = (e, user) => {
dispatch(setSelectedUserId(user.userId))
    navigate("/dashboard/add-new-user", {
      state: {
        editUserDetails: user,
      },
    });
  };
  const addNewUserSaga = () => {
    navigate("/dashboard/add-new-user-saga");
  };
  const editUserSaga = (e, user) => {
dispatch(setSelectedUserId(user.userId))
    navigate("/dashboard/add-new-user-saga", {
      state: {
        editUserDetails: user,
      },
    });
  };


  const deleteUser = (e, UserId) => {
    if (
      window.confirm("Are you sure , you want to delete this user?") == true
    ) {
      const UpdatedUserList = clonedeep(AllUserList);
      const newData = UpdatedUserList.filter((user) => user.userId != UserId);
      dispatch(updatedUserList(newData));
      alert("User Deleted successfully");
    }
  };
  const [userList, setUserList] = useState([]);
  useEffect(() => {
    setUserList(AllUserList);
  }, [AllUserList]);



  return (
    <>
      <div className="row">
        <div className="col-12">
       
          <br /> <br />
          <button
            onClick={addNewUser}
            value={"add"}
            type="button"
            className="btn btn-warning btn-lg float-end me-4"
          >
            Add New User
          </button>
          <button
            onClick={addNewUserSaga}
            value={"add"}
            type="button"
            className="btn btn-warning btn-lg float-end me-4"
          >
            Add New User Saga
          </button>
        </div>
      </div>
      <br /> <br />
      <div className="row">
        <br /> <br />
        <table className="table table-danger table-striped table-hover table-bordered text-center">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">User Name</th>
              <th scope="col">Address</th>
              <th scope="col">Email Id</th>
              <th scope="col">Total Book Issued</th>

              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {userList &&
              userList.length > 0 &&
              userList.map((user) => (
                <tr>
                  <th scope="row">1</th>
                  <td>{user.userName}</td>
                  <td>{user.userAddress}</td>
                  <td>{user.userEmailId}</td>
                  <td>{user.userBookCount}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={(e) => editUser(e, user)}
                    >
                      Edit
                    </button>
                    &nbsp;
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={(e) => editUserSaga(e, user)}
                    >
                      Edit saga
                    </button>
                    &nbsp;
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={(e) => deleteUser(e, user.userId)}
                    >
                      Delete
                      </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </>
      );
    };

export default UserList;
