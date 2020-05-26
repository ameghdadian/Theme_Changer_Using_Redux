import React from "react";
import { connect } from "react-redux";

import { changeBox2Color } from "../../../redux/box/box.actions";

const Box2 = ({ box2_color, changeBox2Color }) => {
  return (
    <div style={{ backgroundColor: `${box2_color}` }} className="box">
      <button onClick={() => changeBox2Color()}>Change My Color</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  box2_color: state.box.box2_color,
});

const mapDispatchToProps = (dispatch) => ({
  changeBox2Color: () => dispatch(changeBox2Color()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Box2);
