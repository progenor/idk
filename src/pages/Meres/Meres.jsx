import "../LearnMore.scss";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import img1 from "../../assets/Images/pierdere-apa-2-compressor.jpg";
import img3 from "../../assets/Images/ultra_sonic.jpg";
import img2 from "../../assets/Images/Localizare_spartura_pe_conducta_de_apa_DN63.jpg";

export const Meres = ({}) => {
  const { t, i18n } = useTranslation();
  const vid_size = "400px";

  const language = () => {
    if ("hu" === i18n.language) return true;
    else return false;
  };

  useEffect(() => {
    setTimeout(() => {
      console.log("ran");
      return window.scrollTo(0, 0);
    }, 1000);
  });

  return (
    <div className="dugulas-main">
      <div className="dugulas-text">
        <div className="dugulas-imgs">
          <img src={img1} alt="" />
          <img src={img3} alt="" className="dugulas-img2" />
          <img src={img2} alt="" />
        </div>
        <div className="text-text">
          <h1>{t("meres_cim")}</h1>

          <p>{t("meres1")}</p>
          {language() ? (
            <>
              <h3>{t("meres2")}</h3>
              <ul>
                <li>{t("meres3_1")}</li>
                <li>{t("meres3_2")}</li>
                <li>{t("meres3_3")}</li>
                <li>{t("meres3_4")}</li>
                <li>{t("meres3_5")}</li>
                <li>{t("meres3_6")}</li>
              </ul>
              <p>{t("meres4")}</p>
              <p>{t("meres5")}</p>
              <p>{t("meres6")}</p>
              <h3>{t("meres7")}</h3>
              <ul>
                <li>{t("meres8_1")}</li>
                <li>{t("meres8_2")}</li>
                <li>{t("meres8_3")}</li>
                <li>{t("meres8_4")}</li>
              </ul>
            </>
          ) : (
            <>
              <p>{t("meres2")}</p>
              <p>{t("meres3")}</p>
              <h3>{t("meres4")}</h3>
              <ul>
                <li>{t("meres4_1")}</li>
                <li>{t("meres4_2")}</li>
                <li>{t("meres4_3")}</li>
                <li>{t("meres4_4")}</li>
                <li>{t("meres4_5")}</li>
                <li>{t("meres4_6")}</li>
                <li>{t("meres4_7")}</li>
                <li>{t("meres4_8")}</li>
              </ul>
              <p>{t("meres5")}</p>
              <p>{t("meres6")}</p>
              <p>{t("meres7")}</p>
              <p>{t("meres8")}</p>
              <p>{t("meres9")}</p>
              <h3>{t("meres10")}</h3>
              <ul>
                <li>{t("meres11_1")}</li>
                <li>{t("meres11_2")}</li>
                <li>{t("meres11_3")}</li>
                <li>{t("meres11_4")}</li>
                <li>{t("meres11_5")}</li>
              </ul>
            </>
          )}

          <div className="dugulas-youtube">
            <iframe
              src="https://www.youtube.com/embed/rtRPIdgg6-U"
              width={vid_size}
              height={vid_size}
              allow="fullscreen;"
            ></iframe>
            <div className="dugulas-vertical-line"></div>
            <iframe
              src="https://www.youtube.com/embed/CwEYm5z8Hm4"
              width={vid_size}
              height={vid_size}
              allow="fullscreen;"
            ></iframe>
            <div className="dugulas-vertical-line"></div>
            <iframe
              src="https://www.youtube.com/embed/2YZvpn5u6cc"
              width={vid_size}
              height={vid_size}
              allow="fullscreen;"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};
