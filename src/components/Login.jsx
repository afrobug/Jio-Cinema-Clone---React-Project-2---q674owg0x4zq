import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { styled } from "styled-components";
import { Button, TextField } from "@mui/material";

const Login = () => {
  return (
    <Container>
      <Content>
        <ArrowBackIcon fontSize="large" />
        <span>Login to continue</span>
        <TextField id="outlined-basic" label="Username" variant="outlined" />
        <TextField
          id="outlined-required"
          label="Email"
          type="email"
          autoComplete="current-password"
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        <Button variant="contained">Continue</Button>
        <div>
          By continuing you agree to our Terms of Use and acknowledge that you
          have read our Privacy Policy .
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
  font-size: 50px;
`;

const BgImage = styled.div`
  height: 100%;
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: 0px -53px;
  background-image: url("/images/loginPoster.png");
  position: absolute;
  right: 0;
  left: 10px;
  z-index: -1;
`;

export default Login;
