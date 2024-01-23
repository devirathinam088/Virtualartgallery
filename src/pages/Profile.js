import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const profileStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "50vh", // Full viewport height
    width: "100%",
    backgroundColor:"aqua",
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "8px", // Add border radius for rounded corners
    overflow: "hidden", // Clip any content overflowing the container
    position: "relative", // Required for hover effect positioning
    transition: "opacity 0.3s ease", // Fade-in transition effect
  };
  const userInfoStyle = {
    textAlign: "center",
    color: "black", // Text color for better readability on the background
  };
  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div style={profileStyle}>
         <div style={userInfoStyle}>
          <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2> <br/>
        <h3>{user.email}</h3>
        <h3>Welcome to Virtual Art Gallery {user.name} </h3>
      </div> 
       </div>
    )
  );
};

export default Profile;