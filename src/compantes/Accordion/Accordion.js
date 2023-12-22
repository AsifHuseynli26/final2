import notificationData from "../../Data/notification.json";
import userMenuData from "../../Data/user_menus.json";
import { useTranslation } from "react-i18next";
import { Context } from "../Context";
import { useContext } from "react";

const Accordion = ({ notification, profil, openModal, open }) => {
  const {
   bg
  } = useContext(Context);
  const [t, i18n] = useTranslation("global");

  const handleChangeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };
  //   const flags = [
  //     {
  //       icon: "bi bi-flag-fill",
  //       content: "English",
  //     },
  //     {
  //       icon: "bi bi-flag-fill",
  //       content: "Azerbaijan",
  //     },
  //   ];

  return (
    <div>
      <div
        style={{
          left: open ? "440px" : "220px",
        }}
        className={`drop-down-contener profil ${profil && "active"} `}
      >
        {userMenuData.map((data) => (
          <div className="drop-down-box">
            <i className={data.icon}></i>
            <span>{data.content}</span>
          </div>
        ))}
      </div>

      <div
        className={`drop-down-contener notification ${
          notification && "active"
        }`}
      >
        {notificationData.map((data) => (
          <div className="drop-down-menu">
            <i className={data.icon}></i>
            <span>{data.content}</span>
          </div>
        ))}
        <button style={{ backgroundColor: bg,
        border:"none" }} className="w-100 btn btn-info py-2">
          View All
        </button>
      </div>

      <div className={`drop-down-contener language ${openModal && "active"}`}>
        <div onClick={() => handleChangeLanguage("en")} className="contlang">
          <i class="bi bi-flag-fill mx-2"></i>
          <p>English</p>
        </div>
        <div onClick={() => handleChangeLanguage("az")} className="contlang">
          <i class="bi bi-flag-fill mx-2"></i>
          <p>Azerbaijan</p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
