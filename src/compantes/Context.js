import { createContext, useState, useEffect } from "react";
import React from "react";
export const Context = createContext();

const Provider = ({ children }) => {
  const [colorPaint, setColorPaint] = useState("bluehover");
  const [bgColor, setBgColor] = React.useState(false);
  const [bg, setBg] = useState("a");
  const [moodColor, setMoodcolor] = useState("b");
  const [activeClass, setActiveClass] = useState("c");
  const [classHover, setClassHover] = useState("d");

  const data = {
    colorPaint,
    setColorPaint,
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
  };

  const lofal = () => {
    const data2 = localStorage.getItem("Color");
    if (data2 !== null) setBg(JSON.parse(data2));
    setActiveClass(JSON.parse(localStorage.getItem("ActiveClass")));
    setClassHover(JSON.parse(localStorage.getItem("classHover")));
    setMoodcolor(JSON.parse(localStorage.getItem("moodColor")));
  };

  useEffect(() => {
    lofal()
  }, [localStorage]);

  return <Context.Provider value={data}>{children}</Context.Provider>;
};

export default Provider;
