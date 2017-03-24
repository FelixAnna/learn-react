import {ACTION_LOGON, ACTION_LOGOUT, ACTION_SIGNIN} from '../constant/ActionType.js';

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case ACTION_LOGON:
      return Object.assign({}, state, {user: action.data});
	case ACTION_LOGOUT:
      return Object.assign({}, state, {user: null});
	case ACTION_SIGNIN:
      return Object.assign({}, state, {user: action.data});
    default:
      return state;
  }
}

export default userReducer