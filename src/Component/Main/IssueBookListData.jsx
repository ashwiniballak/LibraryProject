import React, {useEffect} from "react";
import { issueBookSlice } from "../../Store/features/issueBookSlice";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cloneDeep } from "lodash.clonedeep";
const IssueBookListData = () => {
  const navigate = useNavigate();
  const AllIssueBookList = useSelector((state) => state.issueBookList);
  const AllUserList = useSelector((state) => state.userList);
  const AllBookList = useSelector((state) => state.bookList);
  const cloneIssuBookList = cloneDeep(AllIssueBookList.issueBookList);
  const cloneBookList = cloneDeep(AllBookList.bookList);

  useEffect(() => {
    const userName = "";
    cloneIssuBookList.find(checkBookId);
  }, []);
  const checkBookId = (cloneIssuBookList) => {

    return cloneIssuBookList.bookId === cloneBookList.bookId;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const issueNewBook = () => {
    navigate("/Dashboard/issue-book");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-12">
            <br /> <br />
            <button
              onClick={issueNewBook}
              value={"issue"}
              type="button"
              className="btn btn-warning btn-lg float-end me-4"
            >
              Issue New Book
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-6"> </div>
          <div className="col-6"></div>
        </div>
        <br /> <br />
        <div className="row">
          <br /> <br />
          <table className="table table-danger table-striped table-hover table-bordered text-center">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">User Name</th>
                <th scope="col">Book Name</th>
                <th scope="col">Issue Date</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>userName</td>
                <td>bookName</td>
                <td>issueDate</td>
                <td>
                  <button type="button" className="btn btn-primary">
                    Return
                  </button>
                  &nbsp;
                  <button type="button" className="btn btn-danger">
                    Issue Book
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </form>
    </>
  );
};

export default IssueBookListData;
