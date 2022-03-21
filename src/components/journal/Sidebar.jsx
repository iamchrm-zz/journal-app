import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { startlogout } from "../../actions/auth";
import { startNewNote } from "../../actions/notes";
import { JournalEntries } from "./JournalEntries";

export const Sidebar = () => {
  const dispatch = useDispatch();
  const { name } = useSelector((state) => state.auth);
  const handleLogout = () => {
    dispatch(startlogout());
    console.log("logout");
  };

  const handleAddNewNote = () => {
    dispatch(startNewNote());
    console.log("not implemented ");
  };
  return (
    <aside className="journal__sidebar">
      <div className="journal__sidebar-navbar">
        <h3 className="mt-5">
          <i className="far fa-moon"></i>
          <span> {name}</span>
        </h3>

        <button className="btn" onClick={handleLogout}>
          Logout
        </button>
      </div>

      <div className="journal__new-entry" onClick={handleAddNewNote}>
        <i className="fa-solid fa-plus fa-5x"></i>
        <p className="mt-5">New Entry</p>
      </div>

      <JournalEntries />
    </aside>
  );
};
