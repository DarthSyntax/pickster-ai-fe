import React from "react";
import "./../image-container/image-container.css";

// const ImageContainer = () => {
//   return (
//     <div className="image-container">
//       <img src="https://i.imgur.com/LvO1Dsf.png" />
//       <img src="https://i.imgur.com/wMBvusF.jpeg" />
//       <img src="https://i.imgur.com/0wCaOT9.jpeg" />
//     </div>
//   );
// };

const ImageContainer = ({ images }) => {
  return (
    <div className="image-container">
      {images?.map((image, i) => (
        <img key={i} src={image.url} alt=""></img>
      ))}
    </div>
  );
};

export default ImageContainer;
