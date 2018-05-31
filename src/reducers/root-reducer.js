import { combineReducers } from 'redux';
import { housesReducer } from './housesReducer';
import { swornMemberReducer } from './swornMemberReducer';

const rootReducer = combineReducers({
  houses: housesReducer,
  swornMember: swornMemberReducer
});

export default rootReducer;
