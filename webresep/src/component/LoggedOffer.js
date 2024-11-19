import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
const LoggedOffer = () => {
  const [jt, setJt] = useState(true);

  const handleclick = () => {
    Swal.fire({
      icon: "success",
      title: "Thanks the support!!",
      // footer: '<a href="#">Why do I have this issue?</a>',
    });
    setJt(false);
  };

  return (
    <div>
      <div className="langganan">
        <div className="prem-ket">
          <div className="ket-join">
            {jt && <h1>Premium Join Now!!</h1>}
            {!jt && <h1 style={{position: "absolute", left:"75px", top:"29px" }}>Premium User</h1>}
          </div>

          <div className="btn">
            {jt && (
              <Link
                style={{ textDecoration: "none", cursor: "pointer" }}
                onClick={handleclick}
              >
                <h1>Join</h1>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoggedOffer;
