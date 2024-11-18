import { Link } from "react-router-dom";
const Offer = () => {
  return (
    <div>
      <div className="langganan">
        <div className="prem-ket">

          <div className="ket-join">
            <h1>Premium Join Now!!</h1>
          </div>

          <div className="btn">
            <Link style={{ textDecoration: "none" }} to = "/login">
              <h1>Join</h1>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Offer;
