import { Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import Login from "./Component/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Login" element={<Login />} />

    </Routes>
  );
}

export default App;