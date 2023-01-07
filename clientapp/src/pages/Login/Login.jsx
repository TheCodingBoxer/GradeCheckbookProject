import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "./Login.scss";
import { useRootStore } from "../../infrastructure/hooks/useRootStoreContext";
import dataService from "../../infrastructure/services/data-service";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import InputText from "../../components/Input/InputText";
import Button from "../../components/Button/Button";
import Spinner from "../../components/Spinner/Spinner";
import withOverlay from "../../components/withOverlay/withOverlay";

const SpinnerOverlay = () => withOverlay(<Spinner size="large" />);

export default function Login() {
  const { currentUserStore, tokenStore } = useRootStore();
  const [userNameOrEmail, setUserNameOrEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErroMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const onUserNameOrEmailValueChanged = ({ target }) => {
    setUserNameOrEmail(target.value);
  };

  const onPasswordValueChanged = ({ target }) => {
    setPassword(target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setErroMessage("");
    if (userNameOrEmail.length === 0 || password.length === 0) {
      setErroMessage("User name and/or password are missing");
      return;
    }
    try {
      setLoading(true);
      const { data } = await dataService.login({
        userNameOrEmail,
        password,
      });

      currentUserStore.setCurrentUser(data.userProfile);
      tokenStore.setAccessToken(data.token);

      navigate("/dashboard");
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
      if (error.response) {
        const { data } = error.response;
        console.log(data);
      }
    }
  };

  if (currentUserStore.userName) return <Navigate to="/" replace />;

  return (
    <div id="login" className="container">
      <h3>Sandbox</h3>
      <hr />
      <form onSubmit={handleSubmit}>
        <InputText
          placeholder="Username or email address"
          value={userNameOrEmail}
          onChange={onUserNameOrEmailValueChanged}
        />
        <InputText
          type="password"
          placeholder="Password"
          value={password}
          onChange={onPasswordValueChanged}
        />
        <Button btnType="submit">Sign in</Button>
        {errorMessage && <ErrorMessage message={errorMessage} />}
      </form>
      {loading && <SpinnerOverlay />}
    </div>
  );
}
