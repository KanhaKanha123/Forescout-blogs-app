import { render, screen } from '@testing-library/react';
import App from './App';
import ContextProvider from './store/context';
import { QueryClientProvider } from "react-query";
import { client } from './react-query/query-client';

describe('App component', () => {
  test('renders blog site text in header', () => {
    render(<QueryClientProvider client={client}>
      <ContextProvider>
        <App />
      </ContextProvider>
    </QueryClientProvider>);
    const linkElement = screen.getByText(/Blog site/i);
    expect(linkElement).toBeInTheDocument();
  });
});
