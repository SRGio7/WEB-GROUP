import "./App.css";
import "./style.css";
import Content from "./component/Content";
import Header from "./component/Header";
import Navbar from "./component/Navbar";
import Offer from "./component/Offer"
import Script from "./component/Script";

function App() {
  return (
    <>
      <div>
        <Header />
        <div className="container">
          <Content />
          <Navbar />
          <Offer />
          <Script/>
        </div>
      </div>
    </>
  );
}

export default App;
