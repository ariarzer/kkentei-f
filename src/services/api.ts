const url =
  import.meta.env.MODE === 'development'
    ? 'http://localhost:3000'
    : 'https://kkentei-b.onrender.com';

const headers = {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
};

export async function getKanji() {
  const data = await fetch(`${url}/getAllKanji`, {
    method: 'GET',
    headers: headers,
  });
  return data.json();
}

export async function getWords() {
  const data = await fetch(`${url}/getWords`, {
    method: 'GET',
    headers: headers,
  });
  return data.json();
}

export async function setLastReview(wordId: string) {
  const data = await fetch(`${url}/getWords`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({ wordId }),
  });
  return data.json();
}

export async function createUser(username: string, email: string, password: string) {
  const data = await fetch(`${url}/createUser`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({ username, email, password }),
  });
  return data.json();
}
