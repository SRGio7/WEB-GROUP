import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./Firebase/firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginTable = () => {

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleSubmit = async (e) => {
    console.log("Hello")
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User Logged Succesfully");
      
      setTimeout(() => {
        navigate("/loginuser");
      }, 2000);
    } catch (error) {
      console.log("test");
      
      toast.error("Password atau email tidak valid!!", {
        position: "top-center",
        toastId: "success1",
        pauseOnHover: false,
        hideProgressBar: true,
        autoClose: 3000,
      });
    }

  };

  const bodyStyle = {
    width: "auto",
    height: "100vh",
    backgroundImage: `url(${process.env.PUBLIC_URL} /images/WallpaperLogin.jpg)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div style={bodyStyle}>
      <ToastContainer />
      <div className="ForumLogin">
        <form onSubmit={handleSubmit} className="login">
          <div className="cookingmama">
            <img
              src={process.env.PUBLIC_URL + "images/loginPhote.png"}
              alt="logo"
            />
          </div>
          <h1>Login</h1>
          <div className="input-box">
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email"
              required
            />
          </div>
          <div className="input-box">
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
              required
            />
          </div>
          <button type="submit">Login</button>

          <div className="mendaftar">
            <p>
              Tidak punya akun?<Link to="/Register">Register</Link>
            </p>
            <p className="home"><Link to="/">Home</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export { LoginTable };
