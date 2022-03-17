import React from "react";
import { NotesAppBar } from "./NotesAppBar";

export const NoteScreen = () => {
  return (
    <div className="notes__main-content">
      <NotesAppBar />

      <div className="notes__content">
        <input
          type="text"
          placeholder="Insert awesome title"
          className="notes__title-input"
        />

        <textarea
          placeholder="Que paso hoy?"
          name=""
          id=""
          cols="30"
          rows="10"
          className="notes__textarea"
        ></textarea>

        <div className="notes__image">
          <img
            src="https://clickup.com/blog/wp-content/uploads/2020/01/note-taking.png"
            alt="Imagen"
          />
        </div>
      </div>
    </div>
  );
};
