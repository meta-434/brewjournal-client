import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Auth0LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button onClick={() => loginWithRedirect()}>Log In! ☕️</button>;
};

const Auth0LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button onClick={() => logout({ returnTo: window.location.origin })}>
      Log Out
    </button>
  );
};

export default function Login() {
  const [count, setCount] = useState(0);

  // useEffect(() => {
  //   const id = setInterval(() => {
  //     setCount(count + 1);
  //   }, 1000);
  //   return () => clearInterval(id);
  // });

  return (
    <div>
      <p>Login!</p>
      <p>🗿{count}?</p>
      <button onClick={() => setCount(count + 1)}>👍</button>
      <button onClick={() => setCount(count - 1)}>👎</button>
      <Auth0LoginButton />
    </div>
  );
}
