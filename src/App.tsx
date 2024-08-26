import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/Error";
import About from "./pages/About";
import { Docs } from "./pages/Docs";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="*" element={<Error/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/docs" element={<Docs/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
