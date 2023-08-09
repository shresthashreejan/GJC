import { useLocation, Route, Routes } from "react-router-dom";
import React from "react";
import Home from "./components/pages/Home";
import HousingListing from "./components/pages/HousingListing";
import LandListing from "./components/pages/LandListing";
import ApartmentListing from "./components/pages/ApartmentListing";
import NotFound from "./components/pages/NotFound";
import ContactUs from "./components/pages/ContactUs";
import Navbar from "./components/subcomponents/Navbar";
import DetailPage from "./components/pages/DetailPage";
import AppointmentContact from "./components/pages/AppointmentContact";
import AreaConverter from "./components/pages/AreaConverter";
import PageTransition from "./components/subcomponents/PageTransition";
import CommercialListing from "./components/pages/CommercialListing";
import BlogListing from "./components/pages/BlogListing";
import BlogPage from "./components/pages/BlogPage";

const App = () => {
    const location = useLocation();
    return (
        <>
            <div>
                <Navbar isHomePage={location.pathname} />
            </div>
            <PageTransition>
                <Routes key={location.pathname} location={location}>
                    <Route path="/" element={<Home />} />
                    <Route path="/housing" element={<HousingListing />} />
                    <Route path="/land" element={<LandListing />} />
                    <Route path="/apartments" element={<ApartmentListing />} />
                    <Route path="/commercial" element={<CommercialListing />} />
                    <Route path="/contact" element={<ContactUs />} />
                    <Route path="/blogs" element={<BlogListing />} />
                    <Route
                        path="/detail/blogs/:detailId/"
                        element={<BlogPage />}
                    />
                    <Route
                        path="/detail/:category/:detailId/"
                        element={<DetailPage />}
                    />
                    <Route
                        path="/appointment/:category/:detailId/"
                        element={<AppointmentContact />}
                    />
                    <Route path="/areaconverter" element={<AreaConverter />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </PageTransition>
        </>
    );
};

export default App;
