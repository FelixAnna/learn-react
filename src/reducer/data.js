import {ACTION_GETDATA} from '../constant/ActionType.js';

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case ACTION_GETDATA:
		return Object.assign({}, state, {data: action.data});
    default:
      return state
  }
}

export default userReducer