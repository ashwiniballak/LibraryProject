import axios from "axios";
import react, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addUser,
  updatedUserList,
  addUserRequest,
} from "../../Store/features/userSlice";
import uniqid from "uniqid";
import clonedeep from "lodash.clonedeep";
import { getUserByIdSelector } from "../../Selectors/getUserByIdSelector";
const AddNewUserSaga = () => {
  const newUserRequest = {
    userName: "",
    userAddress: "",
    userEmailId: "",
    userBookCount: 0,
    id: 0,
  };
  const [newUser, setNewUser] = useState(newUserRequest);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const AllUserList = useSelector((state) => state.userList);
  const test = useSelector(getUserByIdSelector);
  console.log(test);
  useEffect(() => {
    if (location.state?.editUserDetails) {
      setNewUser(location.state?.editUserDetails);
    }
  }, [location.state?.editBookDetails]);

  const handleChange = (event) => {
    newUser[event.target.name] = event.target.value;
    setNewUser({ ...newUser });
  };

  const addNewUser = () => {
    dispatch(addUserRequest(newUser));
  };

  return (
    <>
      <div className="mb-3">
        <label for="txtusername" className="form-label">
          User Name
        </label>
        <input
          type="text"
          className="form-control"
          id="txtusername"
          name="userName"
          value={newUser.userName}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div className="mb-3">
        <label for="txtaddress" className="form-label">
          Address
        </label>
        <input
          type="text"
          className="form-control"
          id="txtaddress"
          name="userAddress"
          value={newUser.userAddress}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div className="mb-3">
        <label for="userEmailId" className="form-label">
          Email Id
        </label>
        <input
          type="email"
          className="form-control"
          id="userEmailId"
          name="userEmailId"
          value={newUser.userEmailId}
          onChange={(e) => handleChange(e)}
        />
      </div>

      <button type="button" className="btn btn-primary" onClick={addNewUser}>
        {location.state?.editUserDetails ? "Update" : "Add"}
      </button>
    </>
  );
};
export default AddNewUserSaga;
