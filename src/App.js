import "./App.css";
import { Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Home from "./pages/Home/Home";
import PageNotFound from "./pages/PageNotFound/PageNotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <ToastContainer position="top-right" />
    </>
  );
}

export default App;
