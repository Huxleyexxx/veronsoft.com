import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Talk from "../components/Talk";
import WhyUs from "../components/WhyUs";
import Work from "../components/Work";
import AboutUs from "../components/AboutUs";
import CoreValues from "../components/CoreValues";
import Customer from "../components/Customer";
import Offer from "../components/Offer";

const Home = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0a0a0a] text-white">
      <Helmet>
        <title>Hakkımızda | Varonsoft - Ekip, Vizyon & Misyon | Web Tasarım Ajansı</title>
        <meta name="description" content="Varonsoft ekibi olarak, yenilikçi web ve mobil uygulama çözümleriyle markanızı dijitalde büyütüyoruz. 5+ yıllık tecrübemiz, uzman ekibimiz ve başarılı projelerimizle tanışın." />
        <meta name="keywords" content="varonsoft hakkımızda, ekip, ajans, yazılım, web geliştirme, mobil uygulama, vizyon, misyon" />
        <link rel="canonical" href="https://www.varonsoft.com/hakkimizda" />
        <meta property="og:title" content="Hakkımızda | Varonsoft - Ekip, Vizyon & Misyon" />
        <meta property="og:description" content="Varonsoft ekibi olarak, yenilikçi web ve mobil uygulama çözümleriyle markanızı dijitalde büyütüyoruz." />
        <meta property="og:url" content="https://www.varonsoft.com/hakkimizda" />
        <meta property="og:image" content="https://www.varonsoft.com/veron-tiny.svg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hakkımızda | Varonsoft - Ekip, Vizyon & Misyon" />
        <meta name="twitter:description" content="Varonsoft ekibi olarak, yenilikçi web ve mobil uygulama çözümleriyle markanızı dijitalde büyütüyoruz." />
        <meta name="twitter:image" content="https://www.varonsoft.com/veron-tiny.svg" />
      </Helmet>

      {/* Arka plan efektleri */}
      <div className="absolute w-[600px] h-[600px] bg-[#4c5faf] opacity-30 rounded-full blur-[120px] top-[-150px] left-[50px]"></div>
      <div className="absolute w-[500px] h-[500px] bg-[#324b6e] opacity-20 rounded-full blur-[100px] bottom-[-100px] right-[0px]"></div>

      {/* İçerik */}
      <div className="relative z-10">
        <Navbar />
        <AboutUs />
        <Customer />
        <CoreValues />
        <WhyUs />
        <Work />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
