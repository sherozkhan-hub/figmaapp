import Bussiness from "./components/Bussiness";
import Clients from "./components/Clients";
import Footer from "./components/Footer";
import HappyClients from "./components/HappyClients";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import NewsLetter from "./components/NewsLetter";
import Product from "./components/Product";

import { useEffect, useRef } from "react";
import Scroll from "./components/Scroll";

function App() {
  const scrollRef = useRef(null);
  const scrollToTopRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const scrollToTop = () => {
    if (scrollToTopRef.current) {
      scrollToTopRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="ml-[4.2rem] max-w-[1240px] overflow-hidden font-averta">
      <Navbar ref={scrollToTopRef} />
      <Header />
      <Clients />
      <Bussiness ref={scrollRef} />
      <Product />
      <HappyClients />
      <NewsLetter />
      <Footer />
      <Scroll scroll={scrollToTop} />
    </div>
  );
}

export default App;
