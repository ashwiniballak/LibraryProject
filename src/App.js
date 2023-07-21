import "./App.css";
import Login from "./Component/Login/Login";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  Navigate,
} from "react-router-dom";
import Dashboard from "./Component/Main/Dashboard";
import BookList from "./Component/Main/BookList";
import IssueBookList from "./Component/Main/IssueBookList";
import UserList from "./Component/Main/UserList";
import AddNewBook from "./Component/Main/AddNewBook";
import AddNewUser from "./Component/Main/AddNewUser"
import IssueBookListData from "./Component/Main/IssueBookListData"
import AddNewUserSaga from "./Component/Main/AddNewUserSaga"

const App = () => {
  const isLogged = true;
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={isLogged ? <Navigate to="/Dashboard" replace /> : <Login />}
        />
        <Route path="/Dashboard" element={<Dashboard />}>
          <Route index element={<BookList />} />
          <Route path="book-list" element={<BookList />} />
          <Route path="add-new-book" element={<AddNewBook />} />
          <Route path="user-list" element={<UserList />} />
          <Route path="add-new-user" element={<AddNewUser/>}/>
          <Route path="add-new-user-saga" element={<AddNewUserSaga />} />
          <Route path="issue-book" element={<IssueBookList />} />
          <Route path="issue-book-data" element={<IssueBookListData />} />

        </Route>
      </Routes>
    </Router>
  );
};

export default App;
