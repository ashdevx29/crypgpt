import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './Pages/Homepage'
import Header from './Components/Directives/Header'; 
import Footer from './Components/Directives/Footer'; 
import './App.css'
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import TermsAndConditions from "./Pages/TermsAndConditions";

function App() {

  return (
    <>
       <BrowserRouter>
        <Header /> 
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />


        </Routes>
        <Footer /> 
      </BrowserRouter>
    </>
  )
}

export default App
