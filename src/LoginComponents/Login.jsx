import React, { useEffect, useState } from "react";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useDispatch, useSelector } from "react-redux";
import { getLogin } from "../Redux/loginSlice";
import { useNavigate } from "react-router-dom";
// import { auth, provider } from "../firebase";

const Login = (props) => {
  // const handleAuth = () => {
  //   auth.signInWithPopup(provider).then((result) =>{
  //     console.log(result)
  //   }).catch((error) =>{
  //     alert(error.message);
  //   })
  // }

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLogin, loginError } = useSelector((state) => state.login);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  useEffect(() => {
    if (isLogin) {
      navigate("/home");
    }
  }, [isLogin, navigate]);

  useEffect(() => {
    if (loginError) {
      alert(loginError);
    }
  }, [loginError]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getLogin({ email: email, password: pass }));
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  return (
    <div className="auth-form-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={handleEmail}
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
        <button type="submit">Log In</button>
      </form>
      <button
        className="link-btn"
        onClick={() => props.onFormSwitch("register")}
      >
        Don't have an account? Register here.
      </button>

      {/* <button >Login with Google</button> */}
      <br />
      <div style={{ fontSize: 13 }}>
        By continuing you agree to our{" "}
        <a href="https://help.jiocinema.com/articles/terms-and-conditions/terms-and-conditions/641d382892cd636d4c10983d?uid=6c4f9573-cfd7-4d5c-ac97-546d21ebe9a9&name=Gnwu4Zof">
          <span style={{ color: "#f43636eb" }}>Terms of Use </span>
        </a>
        and
        <br /> acknowledge that you have read our{" "}
        <a href="https://help.jiocinema.com/articles/terms-and-conditions/privacy-policy/641d3829d903444a7aef49b1?uid=6c4f9573-cfd7-4d5c-ac97-546d21ebe9a9&name=Gnwu4Zof">
          <span style={{ color: "#f43636eb" }}>Privacy Policy</span>.
        </a>
      </div>
    </div>
  );
};

export default Login;
