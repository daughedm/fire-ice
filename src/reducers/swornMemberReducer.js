export const swornMemberReducer = (state = {}, action) => {
  switch (action.type) {
  case 'ADD_SWORNMEMBER':
    return {...state, [action.houseName]: action.swornMembers};
  default:
    return state;
  }
};
