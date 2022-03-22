import { ApolloProvider } from '@apollo/client';
import client from '../lib/apollo-client'
import Layout from '../components/Layout/Layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps, pages }) {
  return (
    <ApolloProvider client={client}>
      <Layout pages={pages}>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

export default MyApp;
