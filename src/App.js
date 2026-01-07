import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./LayOuts/Header";
import { Sidebar } from "./LayOuts/Sidebar";
import { Dashboard } from "./Dashboard";
import { Hero } from "./Home/Hero";
import { ValuedServices } from "./Home/ValuedServices";
import { Whychooseus } from "./Home/Whychooseus";
import { OurFeatures } from "./Home/OurFeatures";
import { AboutHero } from "./About/AboutHero";
import { AboutUs } from "./About/AboutUs";
import { ExpertPeople } from "./About/ExpertPeople";
import { Footers } from "./LayOuts/Footer";
import { Career } from "./About/Career";
import Login from "./Login";
import { useEffect, useState } from "react";
import { ServiceDetails } from "./ServiceDetails";
import { UploadImages } from "./UploadImages";

function App() {
  const [islogin, setIsLogin] = useState(false)
  const [token, setToken] = useState(localStorage.getItem("token"))
  useEffect(() => {
    if(token){
        setIsLogin(true)
      }
  }, [0])

  return (
    <BrowserRouter>
      <div id="wrapper">
        {islogin == true && <>
          <nav
            className="top1 navbar navbar-default navbar-static-top"
            role="navigation"
            style={{ marginBottom: "0" }}
          >
            <Header />
            <Sidebar setIsLogin={setIsLogin} />
          </nav></>}

        <Routes>
          {islogin == false &&
            <Route path="/" element={<Login setIsLogin={setIsLogin} />} />
          }
          {islogin == true && <>

            <Route path="/" element={<Dashboard />} />
            <Route path="/home/hero" element={<Hero />} />
            <Route path="/home/valuedservices" element={<ValuedServices />} />
            <Route path="/home/whychooseus" element={<Whychooseus />} />
            <Route path="/home/ourfeatures" element={<OurFeatures />} />

            <Route path="/about/hero" element={<AboutHero />} />
            <Route path="/about/valuedservices" element={<AboutUs />} />
            <Route path="/about/expertPeople" element={<ExpertPeople />} />
            <Route path="/footers" element={<Footers />} />
            <Route path="/career" element={<Career />} />
             <Route path="/service-details" element={<ServiceDetails />} />
             <Route path="/upload-images" element={<UploadImages />} />
          </>
          }
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
