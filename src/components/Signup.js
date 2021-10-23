import React, { useEffect, useState } from "react";
import signupValidation from "../validations/signup";
import { useDispatch } from "react-redux";
import { user_info } from "../features/userRegistered";
import "./Signup.css";

const Signup = () => {
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    firstPassword: "",
    confirmPassword: "",
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };

  const [errors, setErrors] = useState({});
  const [dataIsCorrect, setDataIsCorrect] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors(signupValidation(userInfo));
    setDataIsCorrect(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && dataIsCorrect) {
      dispatch(
        user_info({
          firstName: userInfo.firstName,
          lastName: userInfo.lastName,
          email: userInfo.email,
          firstPassword: userInfo.firstPassword,
          confirmPassword: userInfo.confirmPassword,
        })
      );
    }
  }, [errors]);

  return (
    <div className="signup___container">
      <h1>Sign up</h1>
      <form className="signup___form">
        <input
          type="text"
          name="firstName"
          placeholder="First name"
          value={userInfo.firstName}
          onChange={handleChange}
        />
        {errors.firstName && <p className="error">{errors.firstName}</p>}

        <input
          type="text"
          name="lastName"
          placeholder="Last name"
          value={userInfo.lastName}
          onChange={handleChange}
        />
        {errors.lastName && <p className="error">{errors.lastName}</p>}

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={userInfo.email}
          onChange={handleChange}
        />
        {errors.email && <p className="error">{errors.email}</p>}

        <input
          type="password"
          name="firstPassword"
          placeholder="Password"
          value={userInfo.firstPassword}
          onChange={handleChange}
        />
        {errors.firstPassword && (
          <p className="error">{errors.firstPassword}</p>
        )}

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm password"
          value={userInfo.confirmPassword}
          onChange={handleChange}
        />
        {errors.confirmPassword && (
          <p className="error">{errors.confirmPassword}</p>
        )}

        <button
          type="submit"
          className="signup___button"
          onClick={(e) => handleSubmit(e)}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Signup;
