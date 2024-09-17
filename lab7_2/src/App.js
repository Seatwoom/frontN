import React from "react";
import Slider from "./Slider";
import iphone1 from "./iphones/iphone1.jpg";
import iphone2 from "./iphones/iphone2.jpg";
import iphone3 from "./iphones/iphone3.jpg";
import iphone4 from "./iphones/iphone4.jpg";
import iphone5 from "./iphones/iphone5.jpg";
import iphone6 from "./iphones/iphone5.jpg";

const goods = [
  { image: iphone1, title: "iPhone 12", price: "1000" },
  { image: iphone2, title: "iPhone 12 Pro", price: "1222" },
  { image: iphone3, title: "iPhone 13", price: "3000" },
  { image: iphone4, title: "iPhone 13 Pro", price: "3322" },
  { image: iphone5, title: "iPhone 14", price: "3355" },
  { image: iphone6, title: "iPhone 14 Pro", price: "1225" },
];

const App = () => {
  return (
    <div>
      <Slider goods={goods} />
    </div>
  );
};

export default App;
