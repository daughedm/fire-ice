export const houseFetch = () => {
  const url = 'url:"https://www.anapioficeandfire.com/api/v1/houses';
  return fetch(url)
    .then(response => response.json())
    .then(houseData => houseData);
};