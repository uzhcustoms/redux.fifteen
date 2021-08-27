import dispatcher from "../appDispatcher";
import actionTypes from "./actionTypes";

export function changeBlock() {
  dispatcher.dispatch({
    actionType: actionTypes.CHANGE_BLOCK
  });
}

