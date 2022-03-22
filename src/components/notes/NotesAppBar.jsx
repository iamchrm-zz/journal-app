import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startSaveNote } from "../../actions/notes";

export const NotesAppBar = () => {
  const [check, setCheck] = useState(true);
  const dispatch = useDispatch();
  const handleCheckFavorite = () => {
    setCheck(!check);
    console.log("Set favorite to " + check);
  };

  const { active, saveNoteLoad } = useSelector((state) => state.notes);
  console.log(saveNoteLoad);
  const handleSave = () => {
    dispatch(startSaveNote(active));
    console.log("guardando nota");

    console.log("nota guardada");
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
            onClick={handleSave}
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            {saveNoteLoad ? (
              <i className="fa-solid fa-spinner spinner fa-2x"></i>
            ) : (
              <i className="fa-solid fa-cloud-arrow-up fa-2x"></i>
            )}
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
              <i className="fa-regular fa-bookmark fa-2x"></i>
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
