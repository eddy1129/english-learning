import "./App.css";
import Home from "./page/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/Nav";
import DataTable from "./page/DataTable";

function App() {
  return (
    <div>
      <BrowserRouter>
          <Navbar home="Main" />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/table" element={<DataTable />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
