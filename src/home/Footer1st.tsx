import React from "react";
import style from "./Footer1st.module.css";

export const Footer1st: React.FC = () => {
  return (
    <section className={style.Container}>
      <div className={style.TitleArea}>
        <span>Let's get things rolling.</span>
        <div className={style.MessageButtonArea}>
          <span>
            Ready to be part of something incredible? See what’s possible when
            we roll together.
          </span>
          <div className={style.ButtonArea}>
            <button>JOIN THE TEAM</button>
            <button>NEXTROLL ON GITHUB</button>
          </div>
        </div>
      </div>
    </section>
  );
};
