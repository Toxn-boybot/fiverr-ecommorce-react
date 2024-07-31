import "./App.css";
import Header from "./components/header/Header";
import Carousel from "./components/carousel/Carousel";
import Marquee from "./components/marquee/Marquee";
import Offers from "./components/offers/Offers";

function App() {
  return (
    <div className="App">
      <Header />
      <Carousel />
      <Marquee />
      <Offers/>
    </div>
  );
}

export default App;
