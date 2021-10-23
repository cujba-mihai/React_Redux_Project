import React from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Homepage from "./components/Homepage";
import "./App.css";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import { selectUserEmail } from "./features/userRegistered";

const App = () => {
  const loggedin = useSelector(selectUser);
  const signedUp = useSelector(selectUserEmail);

  const component = (signedUp, loggedin) => {
    if (loggedin) {
      return (
        <div>
          <Homepage />
        </div>
      );
    }
    if (signedUp) {
      return <Login />;
    }

    if (!signedUp) {
      return <Signup />;
    }
  };

  return <div>{component(signedUp, loggedin)}</div>;
};

export default App;
