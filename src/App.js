import { Route, Routes } from "react-router-dom";
import "./index.css";
// pages and components
import Navbar from "./components/navbar";
import Home from "./pages/home";

function App() {
  return (
    <div>
      <Navbar />
      <div className="pages">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
