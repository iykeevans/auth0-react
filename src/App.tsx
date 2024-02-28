import {
  Route,
  BrowserRouter as Router,
  Routes,
  Outlet,
  Navigate,
} from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import Home from "./views/Home";
import Profile from "./views/Profile";

const ProtectedRoute = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) return <>Loading...</>;

  return <>{isAuthenticated ? <Outlet /> : <Navigate to="/" />}</>;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
