import { FormEvent } from 'react';
import { createUser } from '../services/api.ts';

export default function CreateUser() {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const email = (formData.get('email') as string).trim();
    const username = (formData.get('username') as string).trim();
    const password = (formData.get('password') as string).trim();

    if (!password || !username || !email) {
      return;
    }

    createUser(username, email, password);
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="email" name="email" placeholder="Emal" required />
      <input type="text" name="username" placeholder="Username" required />
      <input type="password" name="password" placeholder="Password" required minLength={10} />
      <button type="submit">create</button>
    </form>
  );
}
