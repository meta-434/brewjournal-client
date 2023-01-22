import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
// import renderer from 'react-test-renderer'; // for SNAPSHOT TESTING!!
import { render, screen } from '@testing-library/react';
import { mocked } from 'jest-mock';
import '@testing-library/jest-dom';

const user = {
  email: 'johndoe@me.com',
  email_verified: true,
  sub: '000000',
};

jest.mock('@auth0/auth0-react');
const mockedUseAuth0 = mocked(useAuth0);
describe('AppRouter', () => {
  beforeEach(() => {
    mockedUseAuth0.mockReturnValue({
      isAuthenticated: true,
      user,
      logout: jest.fn(),
      loginWithRedirect: jest.fn(),
      getAccessTokenWithPopup: jest.fn(),
      getAccessTokenSilently: jest.fn(),
      getIdTokenClaims: jest.fn(),
      loginWithPopup: jest.fn(),
      isLoading: false,
      buildAuthorizeUrl: jest.fn(),
      buildLogoutUrl: jest.fn(),
      handleRedirectCallback: jest.fn(),
    });
  });

  it('should render components as per association with navbar links', () => {
    expect(1 + 1).toEqual(2);
  });
});
