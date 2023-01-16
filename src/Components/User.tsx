import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';

interface UserProps {
  variant?: string;
}

const User = ({ variant }: UserProps) => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading)
    return (
      <>
        (<p>Loading...</p>)
      </>
    );
  if (isAuthenticated) {
    if (variant === 'chip') {
      return <p>This is a CHIP placeholder</p>;
    } else if (variant === 'text') {
      return <p>This is a TEXT placeholder</p>;
    } else {
      return (
        { isAuthenticated } && (
          <div>
            <p>Welcome Back, {user?.nickname}</p>
          </div>
        )
      );
    }
  }
  return <>{''}</>;
};

export default User;
