export async function getKanji() {
  const url =
    import.meta.env.MODE === 'development'
      ? 'http://localhost:3000'
      : 'https://kkentei-b.onrender.com';
  const data = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
    },
  });
  return data.json();
}
