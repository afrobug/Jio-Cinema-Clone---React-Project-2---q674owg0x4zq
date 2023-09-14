import React, { useEffect, useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { styled } from "styled-components";
import { Button, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getLogin } from "../Redux/loginSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLogin, loginError } = useSelector((state) => state.login);
  const [name, setName] = useState();
  const [password, setPassword] = useState();

  useEffect(() => {
    if (isLogin) {
      navigate("/");
    }
  }, [isLogin,navigate]);

  useEffect(() => {
    if (loginError) {
      alert(loginError);
    }
  }, [loginError]);

  const handleLogin = () => {
    dispatch(
      getLogin({
        name,
        password,
      })
    );
  };

  const handleName = (event) => {
    setName(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  return (
    <Container>
      <Content>
        <div style={{ display: "flex" }}>
          <ArrowBackIcon fontSize="medium" />
          <div style={{ marginLeft: "15px", fontWeight: "bold" }}>
            Login to continue
          </div>
        </div>
        <TextField
          id="outlined-basic"
          label="Username"
          value={name}
          onChange={handleName}
          variant="outlined"
        />
        {/* <TextField
          id="outlined-required"
          label="Email"
          type="email"
          value={email}
          autoComplete="current-password"
        /> */}
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          value={password}
          onChange={handlePassword}
          autoComplete="current-password"
        />
        <Button variant="contained" onClick={handleLogin}>
          Continue
        </Button>
        <div style={{ fontSize: 15 }}>
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
      </Content>
      <BgImage />
    </Container>
  );
};

const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;

const Content = styled.div`
  margin-bottom: 10vw;
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;
  font-size: 22px;
`;

const BgImage = styled.div`
  height: 100%;
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: 0px -53px;
  background-image: url("/images/loginPoster.png");
  position: absolute;
  right: 0;
  left: 0;
  z-index: -1;
`;

export default Login;
