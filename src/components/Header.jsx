import { useState } from "react";
import { Slider1 } from "./Slider1";
import { Slider2 } from "./Slider2";
import { Slider3 } from "./Slider3";
// import { Navigation } from "./Navigation";
import { SliderControls } from "./SliderControls";

const sliders = [<Slider1 key={1} />, <Slider2 key={2} />, <Slider3 key={3} />];

export const Header = () => {
  const [index, setIndex] = useState(0);

  return (
    <div style={{ position: "relative" }}>
      {/* <Navigation /> */}
      {sliders[index]}
      <SliderControls setIndex={setIndex} index={index} />
    </div>
  );
};
