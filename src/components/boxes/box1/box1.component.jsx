import React from "react";
import { connect } from "react-redux";

import { changeBox1Color } from "../../../redux/box/box.actions";

const Box1 = ({ box1_color, changeBox1Color }) => {
  return (
    <div style={{ backgroundColor: `${box1_color}` }} className="box">
      <button onClick={() => changeBox1Color()}>Change My Color</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  box1_color: state.box.box1_color,
});

const mapDispatchToProps = (dispatch) => ({
  changeBox1Color: () => dispatch(changeBox1Color()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Box1);
