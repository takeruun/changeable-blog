import '../styles/globals.scss';
import { ApolloProvider } from '@apollo/client';
import type { AppProps } from 'next/app';
import { client } from 'src/lib/apollo-client';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
