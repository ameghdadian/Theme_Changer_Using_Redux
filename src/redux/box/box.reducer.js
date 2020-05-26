import BoxActionTypes from "./box.types";

const boxColorsMap = {
  box1_color: ["red", "green", "blue"],
  box2_color: ["blue", "purple", "black"],
  box3_color: ["green", "blue", "yellow"],
};

// Here, Indices indicate the current index of box  background color in each corresponding "boxColorsMap"
const initialState = {
  box1_color: boxColorsMap.box1_color[0],
  box2_color: boxColorsMap.box2_color[0],
  box3_color: boxColorsMap.box3_color[0],
  box1_index_color: 0,
  box2_index_color: 0,
  box3_index_color: 0,
};

const boxReducer = (state = initialState, action) => {
  switch (action.type) {
    case BoxActionTypes.CHANGE_BOX1_COLOR:
      return {
        ...state,
        box1_index_color:
          state.box1_index_color === 2 ? 0 : state.box1_index_color + 1,
        box1_color:
          state.box1_index_color === 2
            ? boxColorsMap.box1_color[0]
            : boxColorsMap.box1_color[state.box1_index_color + 1],
      };
    case BoxActionTypes.CHANGE_BOX2_COLOR:
      return {
        ...state,
        box2_index_color:
          state.box2_index_color === 2 ? 0 : state.box2_index_color + 1,
        box2_color:
          state.box2_index_color === 2
            ? boxColorsMap.box2_color[0]
            : boxColorsMap.box2_color[state.box2_index_color + 1],
      };
    case BoxActionTypes.CHANGE_BOX3_COLOR:
      return {
        ...state,
        box3_index_color:
          state.box3_index_color === 2 ? 0 : state.box3_index_color + 1,
        box3_color:
          state.box3_index_color === 2
            ? boxColorsMap.box3_color[0]
            : boxColorsMap.box3_color[state.box3_index_color + 1],
      };
    default:
      return state;
  }
};

export default boxReducer;
