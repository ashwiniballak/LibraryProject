import { Alert, Toast } from "bootstrap";
import react, { useState } from "react";
import axios from "axios";
import "./login.css";
import { useNavigate } from "react-router-dom";
const postFormRequest = { emailId: "", password: "" };
const Login = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState(postFormRequest);
//This is a login handler
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    loginData[name] = value;
    setLoginData({ ...loginData});
  };

  const submiLoginForm = () => {
    axios
      .post("https://jsonplaceholder.typicode.com/posts", {
        email: loginData.emailId,
        passward: loginData.password,
      
      })
      .then((responce) => {
        if (
          responce.data.email === "ashwini" &&
          responce.data.passward === "123"
        ) {
          navigate("/dashboard");
        } else {
          alert("Invalid email-id or passward");
        }
      });
  };
  // const submiLoginForm = () => {

  //   if (loginData.emailId==="ashwini@gmail.com" && loginData.password==="1234")
  //  alert("Login successfully")
  //   else
  //   alert("Invalid email id or passward")

  // };

  return (
    <>
      <div className="container container-custom">
        <div className="mb-3">
          <label for="emailId" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="emailId"
            name="emailId"
            placeholder="Enter email id"
            onChange={(e) => handleChange(e)}
            value={loginData.emailId}
          />
        </div>
        <div className="mb-3">
          <label for="password" className="form-label">
            Passward
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            placeholder="Enter Password"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="mb-3">
          <button
            className="btn btn-primary"
            type="button"
            style={{ alignContent: "center" }}
            onClick={submiLoginForm}
            value={loginData.password}
          >
            Login
          </button>
        </div>
      </div>
    </>
  );
};
export default Login;
