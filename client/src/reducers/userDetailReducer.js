import types from "../actions/types";
function userData(state = null, action) {
  switch (action.type) {
    case types.showUserDetails:
      debugger;
      return action.payload || false;
    default:
      return state;
  }
}

export { userData };
