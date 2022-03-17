import React from "react";

export const JournalEntry = () => {
  return (
    <div className="journal__entry pointer">
      <div
        className="journal__entry-picture"
        style={{
          backgroundSize: "cover",
          backgroundImage:
            "url(https://clickup.com/blog/wp-content/uploads/2020/01/note-taking.png)",
        }}
      ></div>

      <div className="journal__entry-body">
        <p className="journal__entry-title">Un nuevo dia</p>
        <p className="journal__entry-content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          similique, voluptatibus asperiores, debitis enim alias ipsa velit
          mollitia impedit tempora commodi harum beatae repellat eligendi
          tempore iure quos. Minus, reiciendis?
        </p>
      </div>

      <div className="journal__entry-date-box">
        <span>Monday</span>
        <h4>4</h4>
      </div>
    </div>
  );
};
