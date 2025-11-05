import './index.css'
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Aboutme from "./components/Aboutme";
import Experience from "./components/Experience";
import Certificate from "./components/Certificate";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Aboutme/>
      <Experience />
      <Certificate/>
      <Contact />
      <Footer />
    </>
  );
}

export default App;