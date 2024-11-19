import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "./Firebase/firebase";
import { setDoc, doc } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegTable = () => {
  const navigate = useNavigate();
  const bodyStyle = {
    width: "auto",
    height: "100vh",
    backgroundImage: `url(${process.env.PUBLIC_URL} /images/WallpaperLogin.jpg)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  const [peringatan, setPeringatan] = useState(false);
  const [email, setEmail] = useState("");
  const [Confpassword, confPass] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      if (Confpassword === password) {
        await createUserWithEmailAndPassword(auth, email, password);
        const user = auth.currentUser;
        console.log(user);
        if (user) {
          await setDoc(doc(db, "Users", user.uid), {
            email: user.email,
            username: username,
          });

          console.log("Berhasil terdaftar !!");
          toast.success("Berhasil Mendaftar!!", {
            position: "top-center",
            autoClose: 3000,
            toastId: "success1",
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
          });
          
          setTimeout(() => {
            navigate("/login");
          }, 4000);

          // <Router>
          //   <Switch>
          //     <Route exact path="/Login" component={LandingPage} />
          //     <Route path="/room-:roomId" ={RoomPage} />
          //   </Switch>
          // </Router>;
        }
      } else {
        // console.log("Password don't match");
        setPeringatan(true);
        toast.error("Password tidak cocok !!", {
          position: "top-center",
          toastId: "success1",
          pauseOnHover: false,
          hideProgressBar: true,
          autoClose: 3000,
        });
      }
    } catch (error) {
      // console.log(error.message);
      toast.error(error.message, {
        position: "top-center",
        toastId: "success1",
        pauseOnHover: false,
        hideProgressBar: true,
        autoClose: 3000,
      });
    }
  };

  return (
    <div style={bodyStyle}>
      <ToastContainer />
      <div className="ForumLogin">
        <form onSubmit={handleRegister} className="login">
          <div className="cookingmama">
            <img
              src={process.env.PUBLIC_URL + "images/loginPhote.png"}
              alt="logo"
            />
          </div>
          <h1>Register</h1>
          <div className="input-box">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="username"
              required
            />
          </div>
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
            <div>
              {}
              {peringatan && (
                <p
                  style={{
                    fontSize: "19px",
                    position: "absolute",
                    padding: 0,
                    top: "34.4vh",
                    left: "38px",
                  }}
                >
                  Password tidak cocok!!
                </p>
              )}
            </div>
            {}

            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
              required
            />
          </div>

          <div className="input-box">
            <div>
              {}
              {peringatan && (
                <p
                  style={{
                    fontSize: "19px",
                    position: "absolute",
                    padding: 0,
                    top: "44.4vh",
                    left: "38px",
                  }}
                >
                  Password tidak cocok!!
                </p>
              )}
            </div>
            {}

            <input
              id="password"
              value={Confpassword}
              onChange={(e) => confPass(e.target.value)}
              type="password"
              placeholder="confirm-password"
              required
            />
          </div>

          <button type="submit">Register</button>

          <div className="mendaftar">
            <p>
              Sudah punya akun?<Link to="/Login">Masuk</Link>
            </p>
            <p className="home">
              <Link to="/">Home</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegTable;
