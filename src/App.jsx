import Bussiness from "./components/Bussiness";
import Clients from "./components/Clients";
import Footer from "./components/Footer";
import HappyClients from "./components/HappyClients";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import NewsLetter from "./components/NewsLetter";
import Product from "./components/Product";

function App() {
  return (
    <div className="ml-[4.2rem] max-w-[1240px] overflow-hidden font-averta">
      <Navbar />
      <Header />
      <Clients />
      <Bussiness />
      <Product />
      <HappyClients />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default App;
