import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./componets/Header";

import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
// import Clients from "./componets/Clients";
// import Projects from "./componets/Projects";
// import AddClientModal from "./componets/addClientModal";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Project from "./pages/Project";

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
        <Router>
          <Header />
          <div className="container">
            {/* here we use a router so we destructuring all these component to home.jsx */}
            {/* <AddClientModal />
            <Projects />
            <Clients /> */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects/:id" element={<Project />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </Router>
      </ApolloProvider>
    </>
  );
}

export default App;
