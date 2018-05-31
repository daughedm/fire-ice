export const houseFetch = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then(houseData => houseData);
};