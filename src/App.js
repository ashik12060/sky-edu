import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Contact from "./page/Contact/Contact";
import About from "./page/About/About";
import Uk from "./component/Countries/Uk";
import Usa from "./component/Countries/Usa";
import Swe from "./component/Countries/Swe";
import Nz from "./component/Countries/Nz";
import Mal from "./component/Countries/Mal";
import Ita from "./component/Countries/Ita";
import Hun from "./component/Countries/Hun";
import Fra from "./component/Countries/Fra";
import Den from "./component/Countries/Den";
import Austria from "./component/Countries/Austria";
import Finland from "./component/Countries/Finland";
import Aus from "./component/Countries/Aus";

function App() {
  return (
    <>
     <BrowserRouter >
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/usa" element={<Usa />} />
      <Route path="/sweden" element={<Swe />} />
      <Route path="/uk" element={<Uk />} />
      <Route path="/new-zeland" element={<Nz />} />
      <Route path="/malta" element={<Mal />} />
      <Route path="/italy" element={<Ita />} />
      <Route path="/hungary" element={<Hun />} />
      <Route path="/france" element={<Fra />} />
      <Route path="/finland" element={<Finland />} />
      <Route path="/denmark" element={<Den />} />
      <Route path="/austria" element={<Austria />} />
      <Route path="/australia" element={<Aus />} />
     </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
