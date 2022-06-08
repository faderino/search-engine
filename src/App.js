import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/images" element={<HomePage />} />
      <Route path="/news" element={<HomePage />} />
      <Route path="*" element={<div>404. Not found</div>} />
    </Routes>
  );
};

export default App;
