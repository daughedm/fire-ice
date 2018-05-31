export const swornMemberReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_SWORNMEMBER':
      return action.swornMember;
    default:
      return state;
  }
};
