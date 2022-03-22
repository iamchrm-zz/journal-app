import React from "react";
import { useSelector } from "react-redux";
import { JournalEntry } from "./JournalEntry";

export const JournalEntries = () => {
  //cargar las notas desde el estado
  const { notes, loading } = useSelector((state) => state.notes);

  return (
    <div className="journal__entries animate__animated animate__fadeIn animate__faster">
      {loading ? (
        <div className="loading-notes animate__animated animate__fadeIn animate__faster">
          <i className="fa-solid fa-spinner spinner fa-2x"></i>
        </div>
      ) : (
        notes.map((note) => <JournalEntry key={note.id} {...note} />)
      )}
    </div>
  );
};
