import React from "react";
import style from "./Recent.module.css";

export const Recent: React.FC = () => {
  return (
    <section className={style.Container} id="recent">
      <h1>Recent and Upcoming Events</h1>
      <span>No Upcoming Events Scheduled</span>
    </section>
  );
};
