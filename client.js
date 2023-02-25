import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

const SUBGRAPH_URL = 'https://thegraph.com/hosted-service/subgraph/amalnathsathyan/yt-clone';
const httpLink = createHttpLink({
  uri: SUBGRAPH_URL,
});

const client = new ApolloClient({
  uri: httpLink,
  cache: new InMemoryCache(),
});

export default client;
