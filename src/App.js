import React from "react";
import { connect } from "react-redux";

import Boxes from "./components/boxes/boxes";

import {
  changeBox1Color,
  changeBox2Color,
  changeBox3Color,
} from "./redux/box/box.actions";

import "./App.scss";

function App({ changeAllColors }) {
  return (
    <div className="App">
      <div className="boxes">
        <button onClick={() => changeAllColors()} className="main-btn">
          Change All Colors
        </button>
        <Boxes />
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  changeAllColors: () => {
    dispatch(changeBox1Color());
    dispatch(changeBox2Color());
    dispatch(changeBox3Color());
  },
});

export default connect(null, mapDispatchToProps)(App);
