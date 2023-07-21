import axios from "axios";
import react, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addBook, updatedBookList } from "../../Store/features/bookSlice";
import uniqid from "uniqid";
import clonedeep from "lodash.clonedeep";

const AddNewBook = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const AllbookList = useSelector((state) => state.bookList);

  const newBookRequest = { bookName: "", bookAuthor: "", bookCount: 0, id: 0 };
  const [newBook, setNewBook] = useState(newBookRequest);

  const handleChange = (event) => {
    newBook[event.target.name] = event.target.value;
    setNewBook({ ...newBook });
    console.log(newBook);
  };
  const addNewBook = () => {
//validations
if((newBook.bookName).trim()==="")
{
  alert("Please insert book name");
}
else if(newBook.bookCount<1)
{
  alert("please enter book cout")
}

else{

    if (location.state?.editBookDetails) {
      const bookId = location.state?.editBookDetails.bookId;
      const UpdatedBookList = clonedeep(AllbookList.bookList);
      var foundIndex = UpdatedBookList.findIndex((x) => x.bookId == bookId);
      UpdatedBookList[foundIndex].bookName = newBook.bookName.trim();
      UpdatedBookList[foundIndex].bookAuthor = newBook.bookAuthor;
      UpdatedBookList[foundIndex].bookCount = newBook.bookCount;
      dispatch(updatedBookList(UpdatedBookList));
      alert("Book Updated successfully");
      setNewBook(newBookRequest);
      navigate("/dashboard/book-list");

    } else {
      axios
        .post("https://jsonplaceholder.typicode.com/posts", {
          bookName: newBook.bookName.trim(),
          bookAuthor: newBook.bookAuthor,
          bookCount: newBook.bookCount,
          bookId: uniqid(),
        })
        .then((Response) => {
          console.log(Response);

          dispatch(addBook(Response.data));
          alert("Book Added successfully");
          setNewBook(newBookRequest);

          navigate("/dashboard/book-list");
        });
    }
  };
}

  useEffect(() => {
    if (location.state?.editBookDetails) {
      setNewBook(location.state?.editBookDetails);
    }
  }, [location.state?.editBookDetails]);

  // Redux demo

  return (
    <>
    <form>
      <div className="mb-3">
        <label for="txtbookname" className="form-label">
          Book Name
        </label>
        <input
          type="text"
          className="form-control"
          id="txtbookname"
          name="bookName"
          value={newBook.bookName}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div className="mb-3">
        <label for="txtauthor" className="form-label">
          Author Name
        </label>
        <input
          type="text"
          className="form-control"
          id="txtauthor"
          name="bookAuthor"
          value={newBook.bookAuthor}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div className="mb-3">
        <label for="txtbookcount" className="form-label">
          Book Count
        </label>
        <input
          type="number"
          className="form-control"
          id="txtbookcount"
          name="bookCount"
          value={newBook.bookCount}
          onChange={(e) => handleChange(e)}
        required
        min="1"
        
        />
      </div>

      <button type="button" className="btn btn-primary" onClick={addNewBook}>
        {location.state?.editBookDetails ? "Update" : "Add"}
      </button>
      </form>
    </>
  );
};
export default AddNewBook;
