export default (url, data) => {
  return fetch(`${url}`, {
    method: 'POST',
    body: JSON.stringify(data)
  })
    .then(res => res.json());
};
