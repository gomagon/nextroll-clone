import { memo, FC, useEffect, useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import MenuLogo from "./images/MenuLogo.png";
import { Spacer } from "../atoms/Spacer";
import { GoMarkGithub } from "react-icons/go";
import { AiFillYoutube } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import style from "./Header.module.css";

export const Header: FC = memo(() => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const windowResizeFunc = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    navigate("/home");
    window.addEventListener("resize", windowResizeFunc);
    return () => window.removeEventListener("resize", windowResizeFunc);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <header className={style.Container}>
      <div className={style.HeaderArea} id="header">
        <div className={style.HeaderLogoArea} style={{ flexGrow: 20 }}>
          <img
            src={MenuLogo}
            alt="MenuLogo"
            onClick={() => window.open("https://tech.nextroll.com/")}
          />
        </div>
        <div className={style.HeaderMenusArea} style={{ flexGrow: 100 }}>
          <label onClick={() => (window.location.href = "#blog")}>Blog</label>
          <label onClick={() => (window.location.href = "#technology")}>Technology</label>
          <label onClick={() => (window.location.href = "#teams")}>Teams</label>
          <label onClick={() => (window.location.href = "#culture")}>Culture</label>
          <label onClick={() => (window.location.href = "#careers")}>Careers</label>
        </div>
        <div className={style.HeaderIconsArea} style={{ flexGrow: 20 }}>
          <GoMarkGithub />
          <AiFillYoutube />
          <AiOutlineTwitter />
        </div>
        <div className={style.HeaderIconsArea_SM}>
          <GoMarkGithub />
          <AiFillYoutube />
          <AiOutlineTwitter />
          <AiOutlineMenu
            className={`${style.MenuIcon} ${isMenuOpen && style.MenuIcon__isOpen}`}
            onClick={() => setIsMenuOpen((prev) => !prev)}
          />
        </div>
      </div>
      <nav className={`${style.DrawerMenu} ${isMenuOpen && style.DrawerMenu__isOpen}`}>
        <Spacer h={40} />
        <ul
          onClick={() => {
            window.location.href = "#blog";
            setIsMenuOpen((prev) => !prev);
          }}
        >
          Blog
        </ul>
        <ul
          onClick={() => {
            window.location.href = "#teams";
            setIsMenuOpen((prev) => !prev);
          }}
        >
          Teams
        </ul>
        <ul
          onClick={() => {
            window.location.href = "#technology";
            setIsMenuOpen((prev) => !prev);
          }}
        >
          Technology
        </ul>
        <ul
          onClick={() => {
            window.location.href = "#culture";
            setIsMenuOpen((prev) => !prev);
          }}
        >
          Culture
        </ul>
        <ul
          onClick={() => {
            window.location.href = "#careers";
            setIsMenuOpen((prev) => !prev);
          }}
        >
          Careers
        </ul>
      </nav>
      <Outlet />
    </header>
  );
});
