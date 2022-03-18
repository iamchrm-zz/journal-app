import React from "react";
import { useDispatch } from "react-redux";
import { startlogout } from "../../actions/auth";
import { JournalEntries } from "./JournalEntries";

export const Sidebar = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(startlogout());
    console.log("logout");
  };
  return (
    <aside className="journal__sidebar">
      <div className="journal__sidebar-navbar">
        <h3 className="mt-5">
          <i className="far fa-moon"></i>
          <span>Christian</span>
        </h3>

        <button className="btn" onClick={handleLogout}>
          Logout
        </button>
      </div>

      <div className="journal__new-entry">
        <i className="fa-solid fa-plus fa-5x"></i>
        <p className="mt-5">New Entry</p>
      </div>

      <JournalEntries />
    </aside>
  );
};
