import { memo, FC, useEffect, useState } from "react";
import mainImage1 from "./images/2018_engineering_5.jpg";
import mainImage2 from "./images/2018_engineering_meeting-3.jpg";
import mainImage3 from "./images/2018_engineering_meeting-10.jpg";
import mainImage4 from "./images/2018_engineering-2.jpg";
import style from "./Home.module.css";
import { Blog } from "./Blog";
import { Recent } from "./Recent";
import { Technology } from "./Technology";
import { Culture } from "./Culture";
import { Footer1st } from "./Footer1st";
import { Footer2nd } from "./Footer2nd";
import { Teams } from "./Teams";
import { useLocation } from "react-router-dom";

const MAIN_TEXT = "Join NextRoll as we build";
const SUB_TEXT1 = "modern web UIs";
const SUB_TEXT2 = "scalable data pipelines";
const SUB_TEXT3 = "open source software";
const SUB_TEXT4 = "real-time bidding";
const array_text = [SUB_TEXT1, SUB_TEXT2, SUB_TEXT3, SUB_TEXT4];

export const Home: FC = memo(() => {
  const location = useLocation();
  const [subText, setSubText] = useState([""]);

  const onMainMenuClicked = () => {
    // do nothing
  };

  const addChar = (array: string[], val: string): string[] => {
    array.push(val);
    return [...array];
  };
  const delChar = (array: string[]): string[] => {
    array.pop();
    return [...array];
  };

  const autoTypeText = (text: string) =>
    new Promise((resolve, reject) => {
      const array = Array.from(text);
      Promise.resolve()
        .then(() => {
          return Promise.all(
            array.map((val: string, index) => {
              return new Promise((resolve1, reject) => {
                setTimeout(() => {
                  setSubText((prev) => addChar(prev, val));
                  resolve1(true);
                }, 50 * index);
              });
            })
          );
        })
        .then(() => {
          return new Promise((resolve2) => {
            setTimeout(() => {
              resolve2(true);
            }, 1000);
          });
        })
        .then((values) => {
          return Promise.all(
            Array.from({ length: text.length }).map((val, index) => {
              return new Promise((resolve3, reject) => {
                setTimeout(() => {
                  setSubText((prev) => delChar(prev));
                  resolve3(true);
                }, 50 * index);
              });
            })
          );
        })
        .then(() => {
          return new Promise(() => {
            setTimeout(() => {
              resolve(true);
            }, 500);
          });
        });
    });

  const infiniteTextLoop = () => {
    (async () => {
      for (let i = 0; ; i++) {
        await autoTypeText(array_text[i]);
        if (i === array_text.length - 1) i = -1;
      }
    })();
  };

  useEffect(() => {
    let urlHash = location.hash;
    if (urlHash) {
      const position = document.getElementById(urlHash.slice(1))?.offsetTop;
      if (position) {
        window.scroll({
          top: position,
          left: 0,
          behavior: "smooth",
        });
      }
    }
  }, [location]);

  useEffect(() => {
    infiniteTextLoop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={style.container}>
      <section>
        <div className={style.MainBlackAreaOverImage} />
        <img
          className={`${style.MainCommonImage} ${style.MainImage1}`}
          src={mainImage1}
          alt="MainImage"
        ></img>
        <img
          className={`${style.MainCommonImage} ${style.MainImage2}`}
          src={mainImage2}
          alt="MainImage"
        ></img>
        <img
          className={`${style.MainCommonImage} ${style.MainImage3}`}
          src={mainImage3}
          alt="MainImage"
        ></img>
        <img
          className={`${style.MainCommonImage} ${style.MainImage4}`}
          src={mainImage4}
          alt="MainImage"
        ></img>
        <span className={style.Readme}>
          This is a clone site. Some buttons are under construction.
        </span>
        <div className={style.MainTextArea}>
          <span style={{ marginRight: "14px" }}>{MAIN_TEXT}</span>
          <div>
            <span>{subText}</span>
            <span className={style.CursolSpan}>|</span>
          </div>
        </div>
        <div className={style.MainButtonArea}>
          <div>
            <button onClick={onMainMenuClicked}>SEE OPEN POSITIONS</button>
            <button onClick={onMainMenuClicked}>NEXTROLL ON GITHUB</button>
          </div>
        </div>
      </section>
      <div className={style.Space} />
      <Blog />
      <Recent />
      <Technology />
      <Teams />
      <Culture />
      <Footer1st />
      <Footer2nd />
    </div>
  );
});
