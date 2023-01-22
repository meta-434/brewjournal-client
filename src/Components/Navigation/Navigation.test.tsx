import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
// import renderer from 'react-test-renderer'; // for SNAPSHOT TESTING!!
import { render, screen} from '@testing-library/react';
import { mocked } from 'jest-mock';
import '@testing-library/jest-dom'
import Navigation from './Navigation';

const user = {
    email: "johndoe@me.com",
    email_verified: true,
    sub: "000000"
}

jest.mock("@auth0/auth0-react");
const mockedUseAuth0 = mocked(useAuth0);

describe('App', function () {
    // provide mock auth0-spa-js object wrapping <App />
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
            handleRedirectCallback: jest.fn()
        })
    })

    it('renders correctly initial component',async () => {
        render(<Navigation />,);
        const elem = await screen.getByTestId('bootstrap-navbar');
        expect(elem).toBeInTheDocument();
    });

    it('renders the navbar links correctly',() => {
        render(<Navigation />,);
        const linkTestIds = [
            'home',
            'my-recipes',
            'all-recipes',
            'ratings',
            'login',
            'register'];
        const hits: HTMLAnchorElement[] = [];
        linkTestIds.forEach((link) => {
            hits.push(screen.getByTestId(`navlink-${link}`));
        });

        expect(hits).toHaveLength(6);
    })
});
