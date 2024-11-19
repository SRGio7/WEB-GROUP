import React from "react";
// import { useAuth } from "../../AuthProvider";
import LogNavbar from "../../component/LoggedNav";
import Header from "../../component/Header";
import "./../../style.css";
import LoggedOffer from "../../component/LoggedOffer";
import LoggedContent from "../../component/LoggedContent";


const UserLogin = () => {
  // const { currentUser, userData } = useAuth();

  return (
    <div>
      {/* <h1>Welcome, {userData?.username || "User"}!</h1>
      <p>Email: {currentUser?.email}</p>
      <p>UID: {currentUser?.uid}</p> */}
      <Header />
      {/* <Navbar/> */}
      <LogNavbar />
      <LoggedOffer />
      <LoggedContent/>
    </div>
  );
};

export default UserLogin;
