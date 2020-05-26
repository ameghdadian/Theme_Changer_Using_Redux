import React from "react";
import { connect } from "react-redux";

import { changeBox3Color } from "../../../redux/box/box.actions";

const Box3 = ({ box3_color, changeBox3Color }) => {
  return (
    <div style={{ backgroundColor: `${box3_color}` }} className="box">
      <button onClick={() => changeBox3Color()}>Change My Color</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  box3_color: state.box.box3_color,
});

const mapDispatchToProps = (dispatch) => ({
  changeBox3Color: () => dispatch(changeBox3Color()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Box3);
