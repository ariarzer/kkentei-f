import { Routes, Route } from 'react-router-dom';
import Deck from './routes/Deck.tsx';
import Main from './routes/Main.tsx';

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/deck" element={<Deck />} />
      </Routes>
    </main>
  );
}

export default App;
