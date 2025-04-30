import { useEffect, useState } from 'react';
import { getKanji } from './services/api.ts';

type Kanji = {
  id: number;
  kanji: string;
};

function App() {
  const [kanji, setKanji] = useState<Kanji[]>([]);

  useEffect(() => {
    getKanji().then(kanji => {
      setKanji(kanji);
    });
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
