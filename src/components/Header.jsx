import { useState } from "react";
import { Slider1 } from "./Slider1";
import { Slider2 } from "./Slider2";
import { Slider3 } from "./Slider3";

const sliders = [<Slider1 />, <Slider2 />, <Slider3 />];

export const Header = () => {
  const [index, setIndex] = useState(0);
  return <div></div>;
};
