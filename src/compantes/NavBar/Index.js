import React, { useContext, useEffect, useState, useReducer } from "react";
import "../../assests/navbar.css";
import Image from "../../Image/m.jpg";
import { Icon } from "@iconify/react";
import { Context } from "../Context";
import { useTranslation } from "react-i18next";
import Accordion from "../Accordion/Accordion";
import { NavLink } from "react-router-dom";

const moodarray = [
  {
    id: 1,
    title: "Light",
    backgroundColor: "white",
  },
  {
    id: 2,
    title: "Dark",
    backgroundColor: "black",
  },
];
const palettearray = [
  {
    icon: "bxs:paint-roll",
    title: "Blue",
    color: "blue",
  },
  {
    icon: "bxs:paint-roll",
    title: "Red",
    color: "red",
  },
  {
    icon: "bxs:paint-roll",
    title: "Cyan",
    color: "cyan",
  },
  {
    icon: "bxs:paint-roll",
    title: "Green",
    color: "green",
  },
  {
    icon: "bxs:paint-roll",
    title: "Orange",
    color: "orange",
  },
];
// colorPaint,
//   setColorPaint,
function Index({ open }) {
  const {
    bgColor,
    setBgColor,
    bg,
    setBg,
    moodColor,
    setMoodcolor,
    activeClass,
    setActiveClass,
    classHover,
    setClassHover,
  } = useContext(Context);

  // const [state, setState] = useReducer(
  //   (prevState, nextState) => ({ ...prevState, ...nextState }),
  //   {
  //     show: false,
  //   }
  // );

  const [t, i18n] = useTranslation("global");
  const [show, setShow] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [profil, setProfil] = useState(false);
  const [notification, setNotification] = useState(false);

  // const [state, setState] = useReducer(
  //   (prevState, nextState) => ({ ...prevState, ...nextState }),
  //   {
  //     users: [],
  //   }
  // );

  const Pain = (index, palette) => {
    console.log(palette);
    if (index === 0) {
      setBg("blue");
      setActiveClass("blue-color");
      setClassHover("bluehover");
      localStorage.setItem("Color", JSON.stringify(bg));
      localStorage.setItem("ActiveClass", JSON.stringify(activeClass));
      localStorage.setItem("classHover", JSON.stringify(classHover));
    } else if (index === 1) {
      setBg("red");
      setClassHover("redhover");
      setActiveClass("red-color");
      localStorage.setItem("Color", JSON.stringify(bg));
      localStorage.setItem("ActiveClass", JSON.stringify(activeClass));
      localStorage.setItem("classHover", JSON.stringify(classHover));
    } else if (index === 2) {
      setBg("cyan");
      setClassHover("cyanhover");
      setActiveClass("cyan-color");
      localStorage.setItem("Color", JSON.stringify(bg));
      localStorage.setItem("ActiveClass", JSON.stringify(activeClass));
      localStorage.setItem("classHover", JSON.stringify(classHover));
    } else if (index === 3) {
      setBg("green");
      setClassHover("greenhover");
      setActiveClass("green-color");
      localStorage.setItem("Color", JSON.stringify(bg));
      localStorage.setItem("ActiveClass", JSON.stringify(activeClass));
      localStorage.setItem("classHover", JSON.stringify(classHover));
    } else if (index === 4) {
      setBg("orange");
      setClassHover("orangehover");
      setActiveClass("orange-color");
      localStorage.setItem("Color", JSON.stringify(bg));
      localStorage.setItem("ActiveClass", JSON.stringify(activeClass));
      localStorage.setItem("classHover", JSON.stringify(classHover));
    }
  };

  const changeMoodColor = (index, id) => {
    console.log(id);
    if (index == 0) {
      setBgColor(index);
      setMoodcolor("Light");
      localStorage.setItem("moodColor", JSON.stringify(moodColor));
      localStorage.setItem("Dark-Light", JSON.stringify(index));
    } else {
      setBgColor(index);
      setMoodcolor("Dark");
      localStorage.setItem("moodColor", JSON.stringify(moodColor));
      localStorage.setItem("Dark-Light", JSON.stringify(index));
    }
    setBgColor(index);
    // localStorage.setItem("Dark-Light", JSON.stringify(index));
  };

  useEffect(() => {
    const data = localStorage.getItem("Dark-Light");
    if (data !== null) setBgColor(JSON.parse(data));
    if (bgColor) {
      return document.body.classList.add("dark");
    } else {
      return document.body.classList.remove("dark");
    }
  }, [bgColor]);

  return (
    <div className="nav ">
      <nav class="navBar">
        <div
          onClick={() => {
            setProfil(!profil);
            setNotification(false);
            setOpenModal(false);
          }}
          className="navProfil"
        >
          <div className="contimg ">
            <img
              style={{
                border: `3px solid ${bg}`,
              }}
              src={Image}
            />
          </div>
          <p>Asif Hüseynli</p>
        </div>
        <Accordion
          open={open}
          notification={notification}
          profil={profil}
          openModal={openModal}
        />
        <div>
          <i
            onClick={() => {
              setOpenModal(!openModal);
              setProfil(false);
              setNotification(false);
            }}
            class="bi bi-arrow-counterclockwise navbaricon"
          ></i>
          <i
            onClick={() => {
              setProfil(false);
              setOpenModal(false);
              setNotification(!notification);
            }}
            class="bi bi-bell navbaricon"
          >
            <span style={{ backgroundColor: bg }}>12</span>
          </i>
          <i
            onClick={() => setShow(!show)}
            class="bi bi-palette navbaricon"
          ></i>
        </div>
      </nav>

      <div
        className={`palette ${show ? "show" : ""} ${bgColor && "darkmodal"}`}
      >
        <div className="px-4">
          <div className="palettehed">
            <h1>{t("modal.title")}</h1>
            <i onClick={() => setShow(!show)} class="bi bi-x"></i>
          </div>
          <div>
            <h5>{t("modal.mood")}</h5>
            <div>
              {moodarray.map((mood, index) => (
                <div
                  onClick={() => changeMoodColor(index, mood.id)}
                  className={`changemood py-3 mt-3 ${
                    (mood.title === moodColor &&
                      `${activeClass} ${classHover}`) ||
                    classHover
                  }`}
                >
                  <div
                    style={{ backgroundColor: mood.backgroundColor }}
                    className="moodColor"
                  ></div>
                  <div className="textmood">{mood.title}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-5">
            <h5>{t("modal.color")}</h5>
            <div>
              {palettearray.map((palette, index) => (
                <div
                  onClick={() => Pain(index, palette)}
                  className={`mt-3 ${
                    palette.color == bg
                      ? `color_item ${activeClass} ${classHover}`
                      : `color_item ${classHover}`
                  }`}
                >
                  <Icon
                    icon={palette.icon}
                    style={{ color: palette.color, fontSize: "32px" }}
                  />
                  <div className={`painttext `}>{palette.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;

{
  /* <div className={`language ${openModal ? "open" : "close"}`}>
              <div
                onClick={() => handleChangeLanguage("en")}
                className="contlang"
              >
                <i class="bi bi-flag-fill mx-2"></i>
                <p>English</p>
              </div>
              <div
                onClick={() => handleChangeLanguage("az")}
                className="contlang"
              >
                <i class="bi bi-flag-fill mx-2"></i>
                <p>Azerbaijan</p>
              </div>
            </div> */
}
