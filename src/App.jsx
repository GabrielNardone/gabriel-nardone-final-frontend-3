
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Home, Contact, Detail, Favs } from "./Routes";
import { useContext } from "react";
import { ContextGlobal } from "./Components/utils/global.context";



function App() {

  const {theme} = useContext(ContextGlobal) 

  return (
    <div style={{backgroundColor: theme.background, color: theme.font}}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dentist/:id" element={<Detail />} />
        <Route path="/favs" element={<Favs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
