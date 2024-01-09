import "./App.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import logo from "./assets/smartservlogo.png";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "./store/userSlice";

function App() {
  // const [passwordChangeState, setPasswordChangeState] = useState(false);
  const [errorInPassword, setErrorInPassword] = useState("");
  const [errorInUsername, setErrorInUsername] = useState("");
  const passwordValue = useRef();
  const usernameValue = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.user);
  useEffect(() => {
    if (state.username) navigate("/dashboard");
  }, [state]);

  const usernameValidtion = () => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(usernameValue.current.value)) {
      setErrorInUsername("Invalid username, must be a valid email");
      return false;
    } else {
      setErrorInUsername("");
      return true;
    }
  };
  const passwordValidation = () => {
    let specialChar = /[ `!#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    let number = /[0-9]/;
    let upperCase = /[A-Z]/;
    if (
      !(
        !specialChar.test(passwordValue.current.value) &&
        number.test(passwordValue.current.value) &&
        upperCase.test(passwordValue.current.value)
      )
    ) {
      setErrorInPassword(
        "Password must contain one upper case one number and no special character except @"
      );
      return false;
    } else {
      setErrorInPassword("");
      return true;
    }

    // for (let i = 0; i < passwordValue.current.value.length(); i++) {}
  };
  return (
    <div
      style={{ backgroundColor: "#28282B" }}
      className="flex-grow-1 flex-shrink-1 d-flex flex-row justify-content-center">
      <div
        style={{ backgroundColor: "#000000", width: "40%" }}
        className="align-self-center border-dark rounded-3 px-3 py-5 d-flex flex-column">
        <img
          width={"12%"}
          className="align-self-center mb-3"
          src={
            "https://app.smartserv.io/images/smartserv_icon_black.png"
          }></img>
        <img className="align-self-center w-75 mb-3" src={logo}></img>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            let validPassword = passwordValidation();
            let validUsername = usernameValidtion();
            if (
              validPassword &&
              validUsername &&
              passwordValue.current.value == "SmartServTest@123"
            ) {
              dispatch(
                updateUser({
                  username: usernameValue.current.value,
                  password: passwordValue.current.value,
                })
              );
              navigate("/dashboard");
            }
          }}
          className="py-2 d-flex flex-column w-75 align-self-center">
          <Form.Group
            className="w-100 align-self-center mb-3"
            controlId="formBasicEmail">
            <Form.Control
              ref={usernameValue}
              type="email"
              placeholder="Username"
              autoComplete="off"
            />
          </Form.Group>

          <Form.Group
            className="w-100 align-self-center mb-4"
            controlId="formBasicPassword">
            <Form.Control
              ref={passwordValue}
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <Button
            className="w-100 align-self-center mb-3 fs-5"
            variant="success"
            type="submit">
            Login
          </Button>
        </Form>
        <div className="w-75 align-self-center text-center">
          {errorInPassword !== "" && (
            <p className="text-danger">{errorInPassword}</p>
          )}
          {errorInUsername !== "" && (
            <p className="text-danger">{errorInUsername}</p>
          )}
          <a className="text-secondary">Forgot your password?</a>
        </div>
      </div>
    </div>
  );
}

export default App;
