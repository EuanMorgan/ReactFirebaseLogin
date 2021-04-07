import SignUp from "./Components/SignUp";

import styled from "styled-components";
import { AuthProvider } from "./Contexts/AuthContext";

const App = () => {
  const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 80vh;
  `;
  return (
    // Everything is wrapped in the auth provider, allowing the components to access the user
    <AuthProvider>
      <Container>
        <div style={{ maxWidth: "400px", width: "100%" }}>
          <SignUp />
        </div>
      </Container>
    </AuthProvider>
  );
};

export default App;
