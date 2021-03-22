import React from "react";
import ReactDOM from "react-dom";
import Profile from "./components/Profile.js";
import PropTypes from "prop-types";
import user from "./user.json";

const App = () => {
  return (
    <div className="App">
      <Profile user={user} />
    </div>
  );
};

export default App;
