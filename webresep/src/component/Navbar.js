import { Link } from "react-router-dom";

const Navbar = () => {
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
                <h1>
                  <Link to="/Login">Sign in</Link>
                </h1>
              </div>
              <div className="sign-up">
                <h1>
                  <Link to="/Register">Sign up</Link>
                </h1>
              </div>
            </div>
          </div>

          <div className="option">
            <div className="A">
              <i className="fa-solid fa-house" style={{ fontSize: "2rem" }} />
              <h1>
                <Link
                  style={{ textDecoration: "none", color: "Black" }}
                  to="/Beranda"
                >
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
                <Link
                  style={{ textDecoration: "none", color: "Black" }}
                  to="/Resep"
                >
                  bookmark
                </Link>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
