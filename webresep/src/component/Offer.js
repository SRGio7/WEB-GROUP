const Offer = () => {
    return (
      <div>
        <div className="langganan">
          <div className="prem-ket">
            <div className="toggle-switch">
              <div style={{ position: "absolute", right: 10 }}>
                <label className="toggle-switch-cf">
                  <input type="checkbox" id="toggleCheckbox" />
                  <span className="slider">
                    <i
                      className="bi bi-arrow-bar-right"
                      style={{ fontSize: "1.5rem", position: "absolute" }}
                    ></i>
                  </span>
                </label>
              </div>
            </div>

            <div className="ket-join">
              <h1>Premium Join Now!!</h1>
            </div>

            <div className="btn">
              <a href="">
                <h1>Join</h1>
              </a>
            </div>
          </div>
        </div>
        ;
      </div>
    );
}
export default Offer;