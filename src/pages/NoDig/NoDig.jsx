import "../LearnMore.scss";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import img3 from "../../assets/Images/shortliner1.png";
import img1 from "../../assets/Images/shortliner_wood_cut.png";
import img2 from "../../assets/Images/inliner.png";

export const NoDig = ({}) => {
  const { t, i18n } = useTranslation();

  const language = i18n.language;
  const vid_size = "400px";

  const equalsRo = () => {
    if ("ro" === language) return true;
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
          <h1>{t("nodig_cim")}</h1>
          <p>{t("nodig1")}</p>
          <p>{t("nodig2")}</p>
          <p>{t("nodig3")}</p>
          <p>{t("nodig4")}</p>
          <h3>{t("nodig5")}</h3>
          <h2>{t("nodig6")}</h2>
          <p>{t("nodig7")}</p>
          <p>{t("nodig8")}</p>
          <ul>
            <li>{t("nodig9_1")}</li>
            <li>{t("nodig9_2")}</li>
            <li>{t("nodig9_3")}</li>
            <li>{t("nodig9_4")}</li>
            <li>{t("nodig9_5")}</li>

            {equalsRo() && (
              <>
                <li>{t("nodig9_6")}</li>
                <li>{t("nodig9_7")}</li>
              </>
            )}
          </ul>
          <p>{t("nodig10")}</p>
          <p>{t("nodig11")}</p>
          <p>{t("nodig12")}</p>
          <h2>{t("nodig13")}</h2>
          <p>{t("nodig14")}</p>
          <h3>{t("nodig15")}</h3>

          {!equalsRo() && (
            <ul>
              <li>{t("nodig16_1")}</li>
              <li>{t("nodig16_2")}</li>
              <li>{t("nodig16_3")}</li>
              <li>{t("nodig16_4")}</li>
            </ul>
          )}

          <p>{t("nodig17")}</p>
          <p>{t("nodig18")}</p>
          <p>{t("nodig19")}</p>
          <p>{t("nodig20")}</p>
          <h2>{t("nodig21")}</h2>
          <p>{t("nodig22")}</p>
          <h3>{t("nodig23")}</h3>
          <ul>
            {equalsRo() && (
              <>
                <li>{t("nodig24_1")}</li>
                <li>{t("nodig24_2")}</li>
                <li>{t("nodig24_3")}</li>
                <li>{t("nodig24_4")}</li>
              </>
            )}
          </ul>
          <p>{t("nodig25")}</p>
          <p>{t("nodig26")}</p>
          <p>{t("nodig27")}</p>
          <p>{t("nodig28")}</p>
          <p>{t("nodig29")}</p>

          <div className="dugulas-youtube">
            <iframe
              title="cim"
              src="https://www.youtube.com/embed/PMw8Kog80Y0"
              width={vid_size}
              height={vid_size}
              allow="fullscreen;"
            ></iframe>
            <div className="dugulas-vertical-line"></div>
            <iframe
              title="cim"
              src="https://www.youtube.com/embed/Tqi_FdP9INc"
              width={vid_size}
              height={vid_size}
              allow="fullscreen;"
            ></iframe>
            <div className="dugulas-vertical-line"></div>
            <iframe
              title="cim"
              src="https://www.youtube.com/embed/mzy92Drfz0Q"
              width={vid_size}
              height={vid_size}
              allow="fullscreen;"
            ></iframe>
          </div>
          <div className="dugulas-youtube">
            <iframe
              title="cim"
              src="https://www.youtube.com/embed/1JJekIKyieA"
              width={vid_size}
              height={vid_size}
              allow="fullscreen;"
            ></iframe>
            <div className="dugulas-vertical-line"></div>
            <iframe
              title="cim"
              src="https://www.youtube.com/embed/qVfS4WssxsM"
              width={vid_size}
              height={vid_size}
              allow="fullscreen;"
            ></iframe>
            <div className="dugulas-vertical-line"></div>
            <iframe
              title="cim"
              src="https://www.youtube.com/embed/nVuDjaKBzqE"
              width={vid_size}
              height={vid_size}
              allow="fullscreen;"
            ></iframe>
          </div>
          <div className="dugulas-youtube">
            <iframe
              title="cim"
              src="https://www.youtube.com/embed/zX6HdbdO9gg"
              width={vid_size}
              height={vid_size}
              allow="fullscreen;"
            ></iframe>
            <div className="dugulas-vertical-line"></div>
            <iframe
              title="cim"
              src="https://www.youtube.com/embed/WfsHn84br_8"
              width={vid_size}
              height={vid_size}
              allow="fullscreen;"
            ></iframe>
            <div className="dugulas-vertical-line"></div>
            <iframe
              title="cim"
              src="https://www.youtube.com/embed/PocnusBtmjI"
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
