import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Auth0LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button onClick={() => loginWithRedirect()}>Log In! ☕️</button>;
};

const Auth0LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button onClick={() => logout({ returnTo: window.location.origin })}>
      Log Out 👋
    </button>
  );
};

export default function Login() {
  const { isAuthenticated } = useAuth0();
  console.log(`You ${isAuthenticated ? 'ARE ' : 'ARE NOT '}logged in!`);
  return (
    <div>
      <p>Login!</p>
      <p>🗿?</p>({' '}
      {isAuthenticated ? <Auth0LogoutButton /> : <Auth0LoginButton />})
    </div>
  );
}
