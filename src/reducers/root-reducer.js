import { combineReducers } from 'redux';
import { housesReducer } from './housesReducer';
import { swornMemberReducer } from './swornMemberReducer';

const rootReducer = combineReducers({
  houses: housesReducer,
  swornMembers: swornMemberReducer
});

export default rootReducer;
