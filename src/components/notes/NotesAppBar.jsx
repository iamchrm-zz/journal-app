import React, { useState } from "react";

export const NotesAppBar = () => {
  const [check, setCheck] = useState(true);
  const handleCheckFavorite = () => {
    setCheck(!check);
    console.log("Set favorite to " + check);
  };
  return (
    <div className="notes__appbar">
      <span> 28 de agosto 2020</span>
      <div>
        <button className="btn">
          <span
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <i className="fa-solid fa-file-image fa-2x"></i>
            Picture
          </span>
        </button>
        <button className="btn">
          <span
            className=""
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <i className="fa-solid fa-floppy-disk fa-2x"></i>
            save
          </span>
        </button>
        <button className="btn" onClick={handleCheckFavorite}>
          <span
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            {check ? (
              <i class="fa-regular fa-bookmark fa-2x"></i>
            ) : (
              <i className="fa-solid fa-bookmark fa-2x"></i>
            )}
            favorite
          </span>
        </button>
      </div>
    </div>
  );
};
