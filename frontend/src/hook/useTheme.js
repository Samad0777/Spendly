import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const useTheme = () => {
  const Theme = useContext(ThemeContext);
  return Theme;
};

export default useTheme;
