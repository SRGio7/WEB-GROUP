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
                <img src={process.env.PUBLIC_URL + "images/Logos.png"} alt="" srcSet="" />
            </div>

            <div className="option">
              <div className="A">
                <h1>Beranda</h1>
              </div>

              <div className="A">
                <h1>Resep</h1>
              </div>

              <div className="A">
                <h1>Resep</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
export default Navbar;