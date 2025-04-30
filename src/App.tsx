import { useEffect, useState } from 'react';

type Kanji = {
  id: number;
  kanji: string;
};

function App() {
  const [kanji, setKanji] = useState<Kanji[]>([]);

  useEffect(() => {
    if (import.meta.env.MODE === 'development') {
      fetch('http://localhost:3000', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
        },
      }).then(res => {
        res.json().then(data => setKanji(data));
      });
    } else {
      fetch('https://kkentei-b.onrender.com', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
        },
      }).then(res => {
        res.json().then(data => setKanji(data));
      });
    }
  }, []);

  return (
    <div>
      {kanji.map(item => {
        return <span key={item.id}>{item.kanji}</span>;
      })}
    </div>
  );
}

export default App;
