import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";
import {
  selectUserEmail,
  selectUserPassword,
} from "../features/userRegistered";
import "./Login.css";
import { useSelector } from "react-redux";
import loginValidation from "../validations/login";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});
  const [dataIsCorrect, setDataIsCorrect] = useState(false);

  const user_email = useSelector(selectUserEmail);
  const user_password = useSelector(selectUserPassword);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(loginValidation(user_email, user_password, email, password));

    setDataIsCorrect(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && dataIsCorrect) {
      dispatch(
        login({
          email: email,
          password: password,
          loggedIn: true,
        })
      );
    }
  });

  return (
    <div className="login">
      <form className="login___form" onSubmit={(e) => handleSubmit(e)}>
        <h1>Login</h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          id="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p className="error">{errors.email}</p>}
        <input
          type="password"
          placeholder="Password"
          value={password}
          id="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <p className="error">{errors.password}</p>}

        <button type="submit" className="submit___btn">
          Log in
        </button>
      </form>
    </div>
  );
};

export default Login;
