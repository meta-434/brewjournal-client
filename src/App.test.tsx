import React from 'react';
import { act, render, screen } from '@testing-library/react';
import { create, ReactTestRendererTree } from 'react-test-renderer';
import App from './App';

describe('App', () => {
  it('renders without crashing', async () => {
    await act(() => render(<App />));
  });

  it('renders the Navigation component', async () => {
    await act(() => render(<App />));
    const navigation = await screen.findByTestId('navigation');

    expect(navigation).toBeInTheDocument();
  });

  it('matches the snapshot', async () => {
    let tree: ReactTestRendererTree | null = null;
    await act(() => {
      const app = create(<App />);
      tree = app.toTree();
      return tree;
    });
    expect(tree).toMatchSnapshot();
  });
});
