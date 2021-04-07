import styled from "styled-components";
import { AuthProvider } from "./Contexts/AuthContext";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignUp from "./Components/SignUp";
import Dashboard from "./Components/Dashboard";
import Login from "./Components/Login";
import PrivateRoute from "./Components/PrivateRoute";
const App = () => {
  const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 80vh;
  `;
  return (
    // Everything is wrapped in the auth provider, allowing the components to access the user

    <Container>
      <div style={{ maxWidth: "400px", width: "100%" }}>
        <BrowserRouter>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/" component={Dashboard} />
              <Route path="/signup" component={SignUp} />
              <Route path="/login" component={Login} />
            </Switch>
          </AuthProvider>
        </BrowserRouter>
      </div>
    </Container>
  );
};

export default App;
