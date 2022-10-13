import React, { useState } from "react";
import RestaurantCommand from "./RestaurantCommand";

const LoginPage = () => {
  const [errorMessage, setErrorMessage] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const { uname, pass } = document.forms[0];

    const userData = database.find((user) => user.username === uname.value);

    if (userData) {
      if (userData.password !== pass.value) {
        setErrorMessage({ error: error.errorAlert });
      } else {
        setIsSubmitted(true);
      }
    } else {
      setErrorMessage({ error: error.errorAlert });
    }
  };

  const database = [
    {
      username: process.env.REACT_APP_LOGIN_RESTAURANT,
      password: process.env.REACT_APP_PASSWORD_RESTAURANT,
    },
  ];

  const error = {
    errorAlert: "Invalid username or password",
  };

  const renderForm = (
    <div className="form__restaurant">
      <form onSubmit={handleSubmit}>
        <div className="input__restaurant">
          <label>Username </label>
          <input type="text" name="uname" required />
        </div>
        <div className="input__restaurant">
          <label>Password </label>
          <input type="password" name="pass" required />
        </div>
        <div className="submit__restaurant">
          <input type="submit" />
        </div>
        <div>{errorMessage.error}</div>
      </form>
    </div>
  );
  return (
    <div>
      {isSubmitted ? (
        <div>
          <RestaurantCommand />
        </div>
      ) : (
        <div className="wrapper__loginPage">
          <div className="text__loginPage">LOGIN PAGE</div>
          {renderForm}
        </div>
      )}
    </div>
  );
};

export default LoginPage;
