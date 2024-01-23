import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();

  const buttonStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "40px", // Adjust height as needed
    width: "220px", // Adjust width as needed
    margin: "auto", // Center horizontally
  
  };
 
  return (
    <div style={buttonStyle}>
    <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </button>
    </div>
  );
};

export default LogoutButton;