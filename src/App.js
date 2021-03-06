import styled from "styled-components";
import { AuthProvider } from "./Contexts/AuthContext";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignUp from "./Components/SignUp";
import Dashboard from "./Components/Dashboard";
import Login from "./Components/Login";
import PrivateRoute from "./Components/PrivateRoute";
import ForgotPassword from "./Components/ForgotPassword";
import UpdateProfile from "./Components/UpdateProfile";
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
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <Route path="/signup" component={SignUp} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
            </Switch>
          </AuthProvider>
        </BrowserRouter>
      </div>
    </Container>
  );
};

export default App;
