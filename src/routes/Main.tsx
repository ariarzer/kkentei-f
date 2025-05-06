import { Link } from 'react-router-dom';

function Main() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/deck">Deck</Link>
          </li>
          <li>
            <Link to="/review">Review</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/createUser">Create user</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Main;
