const METHOD_NO_BODY = ['get', 'delete'];

export default (url, method, data) => {
  return fetch(url, {
    method: method.toUpperCase(),
    headers: METHOD_NO_BODY.includes(method) ? {} : { 'Content-Type': 'application/json' },
    body: METHOD_NO_BODY.includes(method) ? null : JSON.stringify(data)
  }).then(res => res.json());
}; 
