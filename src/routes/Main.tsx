import { Link } from 'react-router-dom';

function Main() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/deck">Deck</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Main;
