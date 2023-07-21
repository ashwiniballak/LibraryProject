import axios from "axios";
import react, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import clonedeep from "lodash.clonedeep";
import { updatedBookList } from "../../Store/features/bookSlice";

const BookList = () => {
  const AllbookList = useSelector((state) => state.bookList);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addNewBook = () => {
    navigate("/dashboard/add-new-book");
  };
  const editBook = (e, book) => {
    navigate("/dashboard/add-new-book", {
      state: {
        editBookDetails: book,
      },
    });
  };
  const deleteBook = (e, bookId) => {
    if (
      window.confirm("Are you sure , you want to delete this book?") == true
    ) {
      const UpdatedBookList = clonedeep(AllbookList.bookList);
      const newData = UpdatedBookList.filter((book) => book.bookId != bookId);
      dispatch(updatedBookList(newData));
      alert("Book Deleted successfully");
    }
  };
  const [bookList, setBookList] = useState([]);
  useEffect(() => {
    setBookList(AllbookList.bookList);
  }, [AllbookList.bookList]);

  // useEffect(() => {
  //   axios.get("https://jsonplaceholder.typicode.com/users")
  //   .then((response)=>{
  //     setBookList(response.data)
  //     console.log("get response",response)

  //   })
  //   .catch((error)=>
  //   {console.log("error",error)})
  // }, [])

  return (
    <>
      <div className="row">
        <div className="col-12">
     
          <br /> <br />
          <button
            onClick={addNewBook}
            value={"add"}
            type="button"
            className="btn btn-warning btn-lg float-end me-4"
          >
            Add New Book
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
              <th scope="col">Book Name</th>
              <th scope="col">Author</th>
              <th scope="col">Count</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {bookList &&
              bookList.length > 0 &&
              bookList.map((book) => (
                <tr>
                  <th scope="row">1</th>
                  <td>{book.bookName}</td>
                  <td>{book.bookAuthor}</td>
                  <td>{book.bookCount}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={(e) => editBook(e, book)}
                    >
                      Edit
                    </button>
                    &nbsp;
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={(e) => deleteBook(e, book.bookId)}
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

export default BookList;
