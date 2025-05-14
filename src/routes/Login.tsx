import { FormEvent } from 'react';
import { login } from '../services/api.ts';

function Login() {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const username = (formData.get('username') as string).trim();
    const password = (formData.get('password') as string).trim();

    if (!password || !username) {
      return;
    }

    login(username, password);
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="username" placeholder={'User name'} />
      <input type="password" name="password" placeholder={'Password'} />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
