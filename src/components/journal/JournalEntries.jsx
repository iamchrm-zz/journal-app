import React from "react";
import { useSelector } from "react-redux";
import { JournalEntry } from "./JournalEntry";

export const JournalEntries = () => {
  //cargar las notas desde el estado
  const { notes, loading } = useSelector((state) => state.notes);

  return (
    <div className="journal__entries">
      {loading ? (
        <div className="loading-notes">
          <i className="fa-solid fa-spinner spinner fa-2x"></i>
        </div>
      ) : (
        notes.map((note) => <JournalEntry key={note.id} {...note} />)
      )}
    </div>
  );
};
