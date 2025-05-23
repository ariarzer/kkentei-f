import { Routes, Route } from 'react-router-dom';
import CreateUser from './routes/CreateUser.tsx';
import Deck from './routes/Deck.tsx';
import Login from './routes/Login.tsx';
import Main from './routes/Main.tsx';
import Review from './routes/Review.tsx';

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/deck" element={<Deck />} />
        <Route path="/review" element={<Review />} />
        <Route path="/login" element={<Login />} />
        <Route path="/createUser" element={<CreateUser />} />
      </Routes>
    </main>
  );
}

export default App;
