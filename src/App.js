import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./components/LoginButton"; // Import the LoginButton component
import LogoutButton from "./components/LogoutButton";
import Profile from "./components/Profile";

const App = () => {
  const { isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>

  return (
    <>
      <LoginButton/>
      <LogoutButton/>
      <Profile/>
    </>
  );
};

export default App;