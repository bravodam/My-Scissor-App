import { useState, useEffect } from "react";
import { ThemeProvider, CircularProgress, Box } from "@material-ui/core";
import { Route, Navigate, Routes, useLocation } from "react-router-dom";
import Account from "./components/Account";
import Home from "./components/Home";
import { auth } from "./firebase";
import theme from "./theme";
import LinkRedirect from "./components/LinkRedirect";

const App = () => {
  const [user, setUser] = useState(null);
  const { pathname } = useLocation();
  const [initialLoad, setInitialLoad] = useState(
    pathname === "/" || pathname === "/account" ? true : false
  );

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
      setInitialLoad(false);
    });
  }, []);

  if (initialLoad)
    return (
      <Box mt={5} display="flex" justifyContent="center">
        <CircularProgress />
      </Box>
    );
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route exact path="/">
          {user ? <Navigate to="/account" /> : <Home />}
        </Route>
        <Route path="/account">
          {user ? <Account /> : <Navigate to="/" />}
        </Route>
        <Route path="/:shortCode">
          <LinkRedirect />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};

export default App;

