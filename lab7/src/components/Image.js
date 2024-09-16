import React, { useState } from "react";

const Image = () => {
  const [imageSize, setImageSize] = useState(500); // Increased initial size

  const increaseSize = () => setImageSize(imageSize + 50);
  const decreaseSize = () => {
    if (imageSize > 50) setImageSize(imageSize - 50);
  };

  return (
    <div>
      <a href="https://uk.wikipedia.org/wiki/%D0%92%D1%80%D0%BE%D1%86%D0%BB%D0%B0%D0%B2">
        <img
          id="image"
          src="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcTtABbvMt-mwHLN5lq-eDyeLfvPQ-_dvYk781RPO9dGXzbpsMyi7coz11Fn7IWwRGlNXk40Vj_ldpO1WWmTqhticZqlj3Ilofb2OpFsig"
          alt="Вроцлав"
          style={{ width: `${imageSize}px` }}
        />
      </a>
      <div style={{ marginTop: "10px" }}>
        <button
          onClick={() => {
            const newImage = document.createElement("img");
            newImage.src = document.getElementById("image").src;
            newImage.alt = "Вроцлав";
            document.body.appendChild(newImage);
          }}
          style={buttonStyle}
        >
          Додати
        </button>
        <button onClick={increaseSize} style={buttonStyle}>
          Збільшити
        </button>
        <button onClick={decreaseSize} style={buttonStyle}>
          Зменшити
        </button>
        <button
          onClick={() => {
            const images = Array.from(document.querySelectorAll("img"));
            if (images.length > 1) {
              images[images.length - 1].remove();
            }
          }}
          style={buttonStyle}
        >
          Видалити
        </button>
      </div>
    </div>
  );
};

const buttonStyle = {
  margin: "5px",
  padding: "10px 20px",
  fontSize: "16px",
  backgroundColor: "#000",
  color: "white",
  border: "none",
  cursor: "pointer",
  transition: "background-color 0.3s",
};

export default Image;
