import React from "react";
import "./Logout.css";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/userSlice";
import { selectName } from "../features/userRegistered";

const Logout = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectName);

  const handleLogOut = (e) => {
    e.preventDefault();

    dispatch(
      logout({
        user: null,
      })
    );
  };

  return (
    <div className="logout___container">
      <h2 className="welcome___message">
        Welcome, <span>{userName}</span> !
      </h2>
      <button className="logout___button" onClick={(e) => handleLogOut(e)}>
        Log out
      </button>
    </div>
  );
};

export default Logout;
