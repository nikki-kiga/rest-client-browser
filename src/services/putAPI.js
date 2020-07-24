export default (url, data) => {
  return fetch(`${url}`, {
    method: 'PUT',
    body: JSON.stringify(data)
  })
    .then(res => res.json());
};
