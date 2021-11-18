import { Form, Button, Container } from "react-bootstrap";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [usernameReg, setusernameReg] = useState("");
  const [emailReg, setEmailReg] = useState("");
  const [passwordReg, setpasswordReg] = useState("");
  const navigate = useNavigate();
  //   const [currentUser, setcurrentUser] = useState("");
  const [regResponse, setregResponse] = useState("");

  const reg = (e) => {
    e.preventDefault();
    axios
      .post("", {
        name: usernameReg,
        email: emailReg,
        password: passwordReg,
      })
      .then((response) => {
        console.log(response);
        // eslint-disable-next-line
        if (response.data.status == true) {
          //   setcurrentUser(response.data.name);
          console.log("registered");
          navigate("/", { state: {userName:response.data.name} }); //lets assume home is homepage and pass currentUser
        }
          // eslint-disable-next-line
        if (response.data.status == false) {
          setregResponse(response.data.resp);
          navigate("/register");
        }
      });
  };

  const goLogin = () => {
    navigate("/login");
  };
  return (
    <Container>
      <h1 className="text-center p-5 bg-dark text-white">Register</h1>
      <form action="/movies/register" method="POST">
        <Form.Group className="mt-5 mx-5" controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>

          <Form.Control
            type="text"
            name="name"
            required
            onChange={(e) => {
              setusernameReg(e.target.value);
            }}
            placeholder="Enter Username"
          />
        </Form.Group>
        <Form.Group className="m-5" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            required
            onChange={(e) => {
              setEmailReg(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mt-5 mx-5" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Password"
            name="email"
            required
            onChange={(e) => {
              setpasswordReg(e.target.value);
            }}
          />
        </Form.Group>

        <p className="mx-5 mt-4 text-danger ">{regResponse}</p>
        <Button
          className="btn btn-dark m-5 px-4 py-2"
          type="submit"
          onClick={reg}
        >
          Register
        </Button>
        <Button
          type="button"
          className="m-0 px-4 py-2"
          variant="outline-dark"
          onClick={goLogin}
        >
          Login
        </Button>
      </form>
    </Container>
  );
};

export default Signup;