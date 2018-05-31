export const addHouses = (houses) => ({
  type: 'ADD_HOUSES',
  houses
});

export const addSwornMembers = (houseName, swornMembers) => ({
  type: 'ADD_SWORNMEMBER',
  swornMembers,
  houseName
});

