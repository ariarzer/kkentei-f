import { Routes, Route } from 'react-router-dom';
import CreateUser from './routes/CreateUser.tsx';
import Deck from './routes/Deck.tsx';
import Main from './routes/Main.tsx';

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/deck" element={<Deck />} />
        <Route path="/createUser" element={<CreateUser />} />
      </Routes>
    </main>
  );
}

export default App;
