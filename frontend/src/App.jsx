import "./App.css";
import { Routes, Route } from "react-router-dom"; // ✅ no BrowserRouter here
import Home from "./pages/Home.jsx";
import Aboutus from "./pages/Aboutus.jsx";
import Layout from "./pages/Layout.jsx";
import Services from "./pages/Services.jsx";
import Contact from "./pages/Contact.jsx";
import ScrollToTop from "./pages/ScrollToTop.jsx";
import Standards from "./pages/Standards.jsx";

function App() {
  return (
    <>
      <ScrollToTop /> {/* 👈 scroll reset */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/about"
          element={
            <Layout>
              <Aboutus />
            </Layout>
          }
        />
        <Route
          path="/services"
          element={
            <Layout>
              <Services />
            </Layout>
          }
        />
        <Route
          path="/contact"
          element={
            <Layout>
              <Contact />
            </Layout>
          }
        />
        <Route 
        path="/standards"
        element={
          <Layout>
            <Standards />
          </Layout>
        }
        />
      </Routes>
    </>
  );
}

export default App;
