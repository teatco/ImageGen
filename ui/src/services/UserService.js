const api = process.env.REACT_APP_CONTACTS_API_URL || 'http://localhost:5001';

export const getImage = () =>
  fetch(`${api}/api/getImage`)
    .then((res) => res.json())
    .then((data) => data);

export const generateImage = (body) =>
  fetch(`${api}/api/generateImage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ body }),
  }).then((res) => res.json());
