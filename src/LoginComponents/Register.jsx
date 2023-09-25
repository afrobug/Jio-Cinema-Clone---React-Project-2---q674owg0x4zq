import React, { useEffect, useState } from "react";
import { getRegister } from "../Redux/loginSlice";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Register = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isRegister, registerError } = useSelector((state) => state.login);

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    if (isRegister) {
      alert("Successfully Registered");
      navigate("/");
    }
  }, [isRegister, navigate]);

  useEffect(() => {
    if (registerError) {
      alert(registerError);
    }
  }, [registerError]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    dispatch(getRegister({ email: email, password: pass, name: name }));
  };

  return (
    <div className="auth-form-container">
      <h2>Register</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Username</label>
        <input
          value={name}
          name="name"
          onChange={(e) => setName(e.target.value)}
          id="name"
          placeholder="Username"
        />
        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="youremail@gmail.com"
          id="email"
          name="email"
        />
        <label htmlFor="password">Password</label>
        <div className="login-form">
          <input
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            type="password"
            placeholder="********"
            id="password"
            name="password"
            autoComplete="on"
          />
          <VisibilityOffIcon className="eye-icon" />
        </div>
        <button type="submit">Register</button>
      </form>
      <button className="link-btn" onClick={() => props.onFormSwitch("login")}>
        Already have an account? Login here.
      </button>
    </div>
  );
};

export default Register;
