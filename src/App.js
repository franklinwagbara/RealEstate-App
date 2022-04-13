import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import Propertiespage from "./pages/Propertiespage";
import Aboutpage from "./pages/Aboutpage";
import Servicespage from "./pages/Servicespage";
import Contactpage from "./pages/Contactpage";
import Layout from "./components/Layout";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/properties" element={<Propertiespage />} />
          <Route path="/about" element={<Aboutpage />} />
          <Route path="/services" element={<Servicespage />} />
          <Route path="/contact" element={<Contactpage />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
