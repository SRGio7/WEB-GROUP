import { Link } from "react-router-dom";
import { useAuth } from "../AuthProvider";

const LogNavbar = () => {
  const { currentUser, userData } = useAuth();
  return (
    <div>
      <div className="stickyNav">
        <div className="navbar">
          <div className="image">
            <div style={{ display: "flex", justifyContent: "center" }}>
              <h1
                style={{
                  position: "absolute",
                  top: "12.5vh",
                  fontSize: "2rem",
                  right: "7vh",
                }}
              >
                Cooking mama
              </h1>
            </div>
            <img
              src={process.env.PUBLIC_URL + "/images/logos.png"}
              alt="logo"
            />
          </div>
          <div className="signInUP">
            <div className="SUPcontainer">
              <div className="sign-in">
                <h1>Welcome, {userData?.username || "User"}!</h1>
              </div>
            </div>
          </div>

          <div className="option">
            <div className="A">
              <i className="fa-solid fa-house" style={{ fontSize: "2rem" }} />
              <h1>
                <Link style={{ textDecoration: "none", color: "Black" }} to="/loginuser">
                  Beranda
                </Link>
              </h1>
            </div>

            <div className="A">
              <i className="fa-solid fa-book" style={{ fontSize: "2rem" }} />
              <h1>
                <Link
                  style={{ textDecoration: "none", color: "Black" }}
                  to="/Resep"
                >
                  Resep
                </Link>
              </h1>
            </div>

            <div className="A">
              <i
                className="fa-solid fa-bookmark"
                style={{ fontSize: "2rem" }}
              />
              <h1>
                <Link style={{ textDecoration: "none", color: "Black" }}>
                  bookmarks
                </Link>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogNavbar;