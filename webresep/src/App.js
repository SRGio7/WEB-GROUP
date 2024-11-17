import "./style.css";
import {Content,Header,Navbar,Offer} from "./component"

function App() {
  return (
    <>
      <div>
        <Header />
        <div className="container">
          <Content />
          <Navbar />
          <Offer />
        </div>
      </div>
    </>
  );
}

export default App;
