import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Contact from "./page/Contact/Contact";

function App() {
  return (
    <>
     <BrowserRouter >
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
     </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
