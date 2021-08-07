import "./App.css";
import CardsInfo from "./components/CardsInfo";
import Container from "./components/Container";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Container>
        <div className="container">
          <Header />
          <CardsInfo />
        </div>

        <div className="sideBar_div">
          <SideBar />
        </div>
      </Container>

      <Footer />
    </div>
  );
}

export default App;
