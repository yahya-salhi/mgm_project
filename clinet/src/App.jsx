import Header from "./componets/Header";

import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import Clients from "./componets/Clients";
import addClientModal from "./componets/addClientModal";
//there is a problem when i reload the page in deleteClient
//this code fix the problem
const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        clients: {
          merge(existing, incoming) {
            return incoming;
          },
        },
        projects: {
          merge(existing, incoming) {
            return incoming;
          },
        },
      },
    },
  },
});

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  // cache: new InMemoryCache(),
  cache,
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Header />
        <div className="container">
          <Clients />
        </div>
      </ApolloProvider>
    </>
  );
}

export default App;
