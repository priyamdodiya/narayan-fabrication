import React, { useState, useEffect } from "react";
import "./bgimages.css";
import back1 from "../../../assets/back1.jpg";
import back2 from "../../../assets/back2.jpg";
import back3 from "../../../assets/back3.jpg";
import back4 from "../../../assets/back4.jpg";
import back5 from "../../../assets/back5.jpg";
const Bgimages = () => {
  const [bgChange, setBgChange] = useState(back1);
  const bgimages = [back1,back2,back3, back4,back5];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setBgChange((prevImage) => {
        const currentIndex = bgimages.indexOf(prevImage);
        const nextIndex = (currentIndex + 1) % bgimages.length;
        return bgimages[nextIndex];
      });
    }, 5000);
    return () => clearInterval(intervalId);
  }, [bgimages]);

  return (
    <div className="bgimage">
      <img src={bgChange} alt="background" />
      <h1>NARAYAN STEEL & QUALITY IRON & STEEL FABRICATION WORKS
      <br/>Since 2020</h1>
    </div>
  );
};

export default Bgimages;