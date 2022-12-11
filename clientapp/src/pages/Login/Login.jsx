import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.scss";
import { useRootStore } from "../../infrastructure/hooks/useRootStoreContext";
import dataService from "../../infrastructure/services/data-service";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import InputText from "../../components/Input/InputText";
import Button from "../../components/Button/Button";

export default function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErroMessage] = useState("");

  const { currentUserStore, tokenStore } = useRootStore();
  const navigate = useNavigate();

  const onUserNameValueChanged = ({ target }) => {
    setUserName(target.value);
  };

  const onPasswordValueChanged = ({ target }) => {
    setPassword(target.value);
  };

  const onLoginClicked = async () => {
    setErroMessage("");
    if (userName.length === 0 || password.length === 0) {
      setErroMessage("User name and/or password are missing");
      return;
    }
    try {
      const { data } = await dataService.login({ email: userName, password });

      currentUserStore.setCurrentUser(
        data.userProfile.displayName,
        data.userProfile.userName
      );

      tokenStore.setAccessToken(data.token);

      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      if (error.response) {
        const { data } = error.response;
        console.log(data);
      }
    }
  };

  return (
    <>
      <video playsInline autoPlay muted loop id="myVideo">
        <source
          src="https://static.vecteezy.com/system/resources/previews/003/547/733/mp4/winter-snow-man-christmas-new-year-and-winter-holidays-themed-background-animations-free-video.mp4"
          type="video/mp4"
        />
      </video>
      <div className="full-page">
        <div id="login" className="container">
          <h3>Sandbox</h3>
          <hr />
          <InputText
            placeholder="User Name"
            value={userName}
            onChange={onUserNameValueChanged}
          />
          <InputText
            type="password"
            placeholder="Password"
            value={password}
            onChange={onPasswordValueChanged}
          />
          <Button text="Login" onClick={onLoginClicked} />
          {errorMessage && <ErrorMessage message={errorMessage} />}
        </div>
      </div>
    </>
  );
}
