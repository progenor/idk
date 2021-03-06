import "./Gallery.scss";
import "../../assets/Animations/nicebutton.scss";

import { Link } from "react-router-dom";
// import { useEffect } from "react";

import img1 from "../../assets/Images/cars_above.png";
import img2 from "../../assets/Images/Kamion_ejjszakai_munka.jpg";
import img3 from "../../assets/Images/Iszap_kiurites_Kamion.jpg";
import img4 from "../../assets/Images/foto1.jpg";
import img5 from "../../assets/Images/kamion_repuloter.jpg";
import img6 from "../../assets/Images/robot_trip.png";
// import img7 from "../../assets/Images/IMG_7549.jpg";
// import img8 from "../../assets/Images/Localizare_spartura_pe_conducta_de_apa_DN63.jpg";

// import img9 from "../../assets/Images/shortliner1.png";
// import img10 from "../../assets/Images/shortliner_wood_cut.png";
// import img11 from "../../assets/Images/inliner.png";

// import img12 from "../../assets/Images/camera1.png";
// import img13 from "../../assets/Images/camera2.png";
// import img14 from "../../assets/Images/IMG_7549.jpg";

// import img15 from "../../assets/Images/Akna_takaritas_elott.jpg";
// import img16 from "../../assets/Images/IMG_7549.jpg";
// import img17 from "../../assets/Images/Akna_takaritas_utan.jpg";

// import img18 from "../../assets/Images/Kamion_munka.jpg";
// import img19 from "../../assets/Images/Kamion_1.jpg";
// import img20 from "../../assets/Images/Kamion_ejjszakai_munka.jpg";

// import img6 from "../../assets/Images";

import "bootstrap/dist/css/bootstrap.min.css";

import { Carousel } from "react-bootstrap";

import { useTranslation } from "react-i18next";

export const Gallery = () => {
  const { t, i18n } = useTranslation();

  const inter = 4000;

  return (
    <div className="gallery_main">
      <h1>{t("gallery")}</h1>
      <div className="gallery-images">
        <Carousel pause="false" touch="true">
          <Carousel.Item interval={inter}>
            <img className="d-block" src={img1} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item interval={inter}>
            <img className="d-block" src={img2} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item interval={inter}>
            <img className="d-block " src={img3} alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item interval={inter}>
            <img className="d-block " src={img4} alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item interval={inter}>
            <img className="d-block " src={img5} alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item interval={inter}>
            <img className="d-block " src={img6} alt="Third slide" />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="link_wrapper">
        <Link to="/gallery">{t("toGallery")}</Link>
        <div className="button-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
            <path d="M528 32H144c-26.51 0-48 21.49-48 48v256c0 26.51 21.49 48 48 48H528c26.51 0 48-21.49 48-48v-256C576 53.49 554.5 32 528 32zM223.1 96c17.68 0 32 14.33 32 32S241.7 160 223.1 160c-17.67 0-32-14.33-32-32S206.3 96 223.1 96zM494.1 311.6C491.3 316.8 485.9 320 480 320H192c-6.023 0-11.53-3.379-14.26-8.75c-2.73-5.367-2.215-11.81 1.332-16.68l70-96C252.1 194.4 256.9 192 262 192c5.111 0 9.916 2.441 12.93 6.574l22.35 30.66l62.74-94.11C362.1 130.7 367.1 128 373.3 128c5.348 0 10.34 2.672 13.31 7.125l106.7 160C496.6 300 496.9 306.3 494.1 311.6zM456 432H120c-39.7 0-72-32.3-72-72v-240C48 106.8 37.25 96 24 96S0 106.8 0 120v240C0 426.2 53.83 480 120 480h336c13.25 0 24-10.75 24-24S469.3 432 456 432z" />
          </svg>
        </div>
      </div>
    </div>
  );
};
