import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './Pages/Homepage'
import Header from './Components/Directives/Header'; 
import Footer from './Components/Directives/Footer'; 
import './App.css'
import AiChatbotPage from "./Pages/Ecosystem/AiChatbotPage";
import StakingPage from "./Pages/Ecosystem/StakingPage";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import TermsAndConditions from "./Pages/TermsAndConditions";
import Dashboard from "./Pages/Ecosystem/Dashboard";
import ContactUs from "./Pages/ContactUs";
import UseCase from "./Pages/UseCase";
import Token from "./Pages/Token";

function App() {

  return (
    <>
       <BrowserRouter>
        <Header /> 
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/ai-chatbot" element={<AiChatbotPage />} />
          <Route path="/staking" element={<StakingPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/usecase" element={<UseCase/>} />
          <Route path="/token" element={<Token />} />


        </Routes>
        <Footer /> 
      </BrowserRouter>
    </>
  )
}

export default App
