import "./App.css";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Project from "./pages/Project";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Profile from "./pages/Profile";
import Users from "./pages/Users";

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
  cache,
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
            <Route path="projects/:id" element={<Project />} />
            <Route path="login" element={<Login />} />
            <Route path="admin" element={<Admin />} />
            <Route path="profile" element={<Profile />} />
            <Route path="users" element={<Users />} />
          </Routes>
        </Router>
      </ApolloProvider>
    </>
  );
}

export default App;
