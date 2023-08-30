import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index Component={Home} />
        <Route path="/about" Component={About} />
        <Route path="/contact" Component={Contact} />
        <Route path="/gallery" Component={Gallery} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
