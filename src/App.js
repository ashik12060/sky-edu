import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Contact from "./page/Contact/Contact";
import About from "./page/About/About";

function App() {
  return (
    <>
     <BrowserRouter >
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
     </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
