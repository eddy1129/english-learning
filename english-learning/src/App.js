import "./App.css";
import Home from "./page/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/Nav";

function App() {
  return (
    <div>
      <BrowserRouter>
          <Navbar home="Main" />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
