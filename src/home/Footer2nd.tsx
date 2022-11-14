import React from "react";
import style from "./Footer2nd.module.css";
import hstyle from "../header/Header.module.css";
import logo from "../header/images/MenuLogo.png";
import { GoMarkGithub } from "react-icons/go";
import { AiFillYoutube } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";

export const Footer2nd: React.FC = () => {
  return (
    <section className={style.Container}>
      <div className={style.AllArea}>
        <div>
          <img
            src={logo}
            alt="logo"
            onClick={() => window.open("https://tech.nextroll.com/")}
          />
          <div className={style.MenuArea}>
            <label>Blog</label>
            <label>Careers</label>
            <label>GitHub</label>
            <label>NextRoll API</label>
            <div className={hstyle.HeaderIconsArea_SM}>
              <GoMarkGithub />
              <AiFillYoutube />
              <AiOutlineTwitter />
            </div>
          </div>
          <div className={hstyle.HeaderIconsArea}>
            <GoMarkGithub />
            <AiFillYoutube />
            <AiOutlineTwitter />
          </div>
        </div>
        <span>Copyright © 2022 NextRoll, Inc. All rights reserved.</span>
      </div>
    </section>
  );
};
