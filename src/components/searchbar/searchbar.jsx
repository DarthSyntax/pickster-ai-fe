import React, { useState } from "react";
import "./../searchbar/searchbar.css";

const Searchbar = ({ setImages }) => {
  const [text, setText] = useState();

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      let res = await fetch("http://localhost:5000/openai/createimage", {
        method: "POST",
        body: JSON.stringify({
          prompt: text,
          size: "large",
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      let resJson = await res.json();
      console.log(res.status, resJson);
      if (res.status === 200) {
        setImages(resJson.result);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label>Describe your image!</label>
      <textarea className="searchbar" value={text} onChange={handleChange} />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default Searchbar;
