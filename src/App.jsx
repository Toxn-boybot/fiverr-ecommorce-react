import items from './../src/Data/items.json'
import Header from "./components/header/Header";
import Carousel from "./components/carousel/Carousel";
import Marquee from "./components/marquee/Marquee";
import Offers from "./components/offers/Offers";
import About from './components/about/About';
import Contact from './components/Contact/Contact'
import Menu from './components/menu/Menu';

function App() {
  return (
    <div className="App">
      <Header />
      <Carousel />
      <Marquee />
      <Menu items= {items}/>
      <Offers/>
      <About/>
      <Contact/>
    </div>
  );
}

export default App;
