export default url => {
  return fetch(`${url}`)
    .then(res => res.json());
};
  
