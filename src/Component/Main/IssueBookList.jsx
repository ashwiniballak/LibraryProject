import axios from "axios";
import React, { useState, useEffect } from "react";
import DateComponent from "./DateComponent";
import {
  addIssueBook,
  updatedIssueBookList,
} from "../../Store/features/issueBookSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import uniqid from "uniqid";
import cloneDeep from "lodash.clonedeep";
import BookList from "./BookList";
import { updatedBookList } from "../../Store/features/bookSlice";
import { updatedUserList } from "../../Store/features/userSlice";
import GetUserDetailsSelector from '../../Selectors/GetUserDetailsSelector'
const IssueBookList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userBookRequest = {
    userId: "",
    bookId: "",
    bookIssueDate: "",
    bookIssueId: "",
  };

  const AllBookData = useSelector((state) => state.bookList);
  const AllUserData = useSelector((state) => state.userList);
  const AllIssueBookData = useSelector((state) => state.issueBookList);
  const calculateCount1 = useSelector(GetUserDetailsSelector)
  console.log('calculateCount1',calculateCount1);

  const [userList, setUserList] = useState([]);
  const [bookList, setBookList] = useState([]);
  const [userBookIssueList, setUserBookIssueList] = useState(userBookRequest);
  useEffect(() => {
    setUserList(AllUserData.userList);
    setBookList(AllBookData.bookList);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("In submit button");
    axios
      .post("https://jsonplaceholder.typicode.com/posts", {
        userId: userBookIssueList.userId,
        bookId: userBookIssueList.bookId,
        bookIssueDate: userBookIssueList.bookIssueDate,
        bookIssueId: uniqid(),
      })
      .then((Response) => {
        dispatch(addIssueBook(Response.data));


        const bookId = userBookIssueList.bookId;

        const UpdatedBookList = cloneDeep(AllBookData.bookList);
        const foundIndex = UpdatedBookList.findIndex((x) => x.bookId == bookId);
        if(foundIndex!= -1){
        console.log("Updated book list",UpdatedBookList)

        UpdatedBookList[foundIndex].bookCount -= 1;

        dispatch(updatedBookList(UpdatedBookList));
        }
        const userId = userBookIssueList.userId;
        const UpdatedUserList = cloneDeep(AllUserData.userList);
        const foundUserIndex = UpdatedUserList.findIndex(
          (x) => x.userId == userId
        );
        UpdatedUserList[foundUserIndex].userBookCount += 1;
        dispatch(updatedUserList(UpdatedUserList));
        setUserBookIssueList(userBookRequest);

        navigate("/dashboard/issue-book-data");
      });

  };

  const handleChange = (e) => {
    userBookIssueList[e.target.name] = e.target.value;
    setUserBookIssueList({ ...userBookIssueList });
    console.log("In handle change", userBookIssueList);
  };
 

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="row m-5">
          <div className="col-2">
            <label for="dlselectuser" className="form-label">
              Select User:{" "}
            </label>
          </div>
          <div className="col-8">
            <select
              required
              id="dlselectuser"
              name="userId"
              className="form-control w-50"
              onChange={(e) => handleChange(e)}
            >
              <option value="">--Select User--</option>
              {userList &&
                userList.length > 0 &&
                userList.map((user) => (
                  <option value={user.userId}>{user.userName}</option>
                ))}
            </select>
          </div>
        </div>
        <div className="row m-5">
          <div className="col-2">
            <label for="dlselectbook" className="form-label">
              Select Book:
            </label>
          </div>
          <div className="col-8">
            <select
            required
              id="dlselectbook"
              name="bookId"
              className="form-control w-50"
              onChange={(e) => handleChange(e)}
            >
              <option value="">--Select Book--</option>

              {bookList &&
                bookList.length > 0 &&
                bookList.map((book) => (
                  <option value={book.bookId}>{book.bookName}</option>
                ))}
            </select>
          </div>
        </div>
        <div className="row m-5">
          <div className="col-2">
            <label for="txtBookIssueDate" className="form-label">
              Select Book:{" "}
            </label>
          </div>
          <div className="col-8 ">
            <DateComponent handleChange={handleChange} />
          </div>
        </div>

        <div className="row m-5">
          <div className="col-12 ">
            <button
              className="btn btn-primary "
              type="submit"
            >
              Issue Book
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default IssueBookList;
