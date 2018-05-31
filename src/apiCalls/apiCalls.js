export const houseFetch = (url) => {
  return fetch(url)
    .then(response => response.json());
};

export const swornMembersFetch = (url) => {
  return fetch(url)
    .then(response => response.json());
}