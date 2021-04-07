import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebase";
//We want to be able to access current user anywhere in application
//To do this, I make a context.
//The provider wraps the code that needs access
//It has a prop called value which will be the current user.
//TLDR: the context passes down the information without having to manually
//pass it as props to every component, can think of it like a global state
const AuthContext = React.createContext();

//use auth allows us to actually use the context
export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true); //loading true by default because it takes a second to get user data

  //signup and login, can change these two functions if not using firebase
  const signUp = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
  };
  const login = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  };

  useEffect(() => {
    //whenever a new user is logged in, this method is called
    //in use effect to only set listener once, and to unsubscribe when needed
    const unsub = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsub;
  }, []);

  const value = {
    currentUser,
    signUp,
    login,
  };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
      {/* dont render children if not loading */}
    </AuthContext.Provider>
  );
};
