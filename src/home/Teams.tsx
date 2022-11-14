import React, { useState } from "react";
import style from "./Teams.module.css";
import stylesm from "./TeamsSM.module.css";

const RTB =
  "This team works on the infrastructure to purchase the ad space inventory. Volume on the system is huge, about 100 billion daily requests—that’s a million requests per second. It’s the largest piece of infrastructure in the company. They keep the system alive and responding to the volume.";
const BigData =
  "The Big Data team processes raw data, produced by RTB and other sources, into the forum so it can be presented to clients. A big part of their work is to compute various metrics and make them useful. In other words, they pair the right info to the right question the client may have. Their main focus is on transparency, that way customers can learn what's working and what’s not.";
const DataScience =
  "Data Science’s first priority is pricing bid requests—whatever RTB sends over, they price it. This team is constantly changing models and the algorithm to account for new incoming data. The work done is high-math based and has a huge scale. The first step of solving a problem is framing it—with this group, the problem is always changing. These problems are typically fun and interesting in nature.";
const Infrastructure =
  "The Infrastructure team collaborates closely with Data Science to ensure that there the rest of the engineering teams get real-time data without any issues. They build the infrastructure that allows data science and other teams to do their work without any delays.";
const Applications =
  "The Applications team builds products for both internal and external users—essentially every user-facing product NextRoll produces. They are the only group that is primarily focused on user interaction. This team collaborates with designers and product managers to ensure that everything that is built fits our users’ needs.";
const BI =
  "BI is responsible for measuring how well NextRoll is performing for clients. This group ensures that clients have access to high-impact ad inventories. Additionally, the team helps incubate new products by measuring their effectiveness. They analyze the most interesting data sets and come up with insights that optimize our algorithm—curious minds are always welcomed.";
const SolutionsEngineering =
  "Solutions engineers are the most client-facing team. They work closely with sales (with onboarding and post-launch issues) and customers’ implication teams to solve wide-ranging issues—covering all verticals. They’re time is split between writing code and interacting with customers. This group contains members with very diverse set of backgrounds and is the only team that codes in different techs. Hummus lovers are appreciated.";

type dataType = {
  id: number;
  title: string;
  message: string;
  isOpen: boolean;
};
const datas = [
  {
    id: 0,
    title: "RTB >",
    message: RTB,
    isOpen: false,
  },
  {
    id: 1,
    title: "Big Data >",
    message: BigData,
    isOpen: false,
  },
  {
    id: 2,
    title: "Data Science >",
    message: DataScience,
    isOpen: false,
  },
  {
    id: 3,
    title: "Infrastructure >",
    message: Infrastructure,
    isOpen: false,
  },
  {
    id: 4,
    title: "Applications >",
    message: Applications,
    isOpen: false,
  },
  {
    id: 5,
    title: "BI >",
    message: BI,
    isOpen: false,
  },
  {
    id: 6,
    title: "Solutions Engineering >",
    message: SolutionsEngineering,
    isOpen: false,
  },
];

export const Teams: React.FC = () => {
  const [isOpens, setIsOpens] = useState<
    {
      id: number;
      title: string;
      message: string;
      isOpen: boolean;
    }[]
  >(datas);
  const [buttonNum, setButtonNum] = useState<number>(-1);

  const setDatas = (props: dataType[], id: number) => {
    if (buttonNum === id) {
      props[id].isOpen = !props[id].isOpen;
      setButtonNum(-1);
    } else {
      if (buttonNum >= 0) props[buttonNum].isOpen = !props[buttonNum].isOpen;
      props[id].isOpen = !props[id].isOpen;
      setButtonNum(id);
    }
    return [...props];
  };

  const onButtonClicked = (id: number) => {
    setIsOpens((prev) => setDatas(prev, id));
  };

  return (
    <section className={style.Container} id="teams">
      <div className={style.AllArea}>
        <h1>Teams</h1>
        <div className={style.ButtonArea}>
          {isOpens.map((val) => (
            <button
              className={`${style.Button} ${
                buttonNum >= 0 && (buttonNum === val.id ? style.Button__Open + " " + style.Button__Open_Border : style.Button__Open)
              }`}
              key={val.id}
              onClick={() => onButtonClicked(val.id)}
            >
              {val.title}
            </button>
          ))}
        </div>
        <div className={style.MessageAreas}>
          {isOpens.map((val) => (
            <span key={val.id} className={`${style.MessageSpan} ${val.isOpen && style.MessageSpan__Open}`}>
              {val.message}
            </span>
          ))}
        </div>
        <div className={`${style.DummySpace} ${buttonNum >= 0 && style.DummySpace__Open}`} />
      </div>
      <div className={stylesm.AllArea}>
        <h1>Teams</h1>
        <div className={stylesm.ButtonArea}>
          {isOpens.map((val) => (
            <>
              <button
                className={`${stylesm.Button} ${
                  buttonNum >= 0 && (buttonNum === val.id ? stylesm.Button__Open + " " + stylesm.Button__Open_Border : stylesm.Button__Open)
                }`}
                key={val.id}
                onClick={() => onButtonClicked(val.id)}
              >
                {val.title}
              </button>
              <div className={`${stylesm.MessageAreas} ${val.isOpen && stylesm.MessageAreas__Open}`}>
                <span key={val.id} className={`${stylesm.MessageSpan} ${val.isOpen && stylesm.MessageSpan__Open}`}>
                  {val.message}
                </span>
              </div>
            </>
          ))}
        </div>
      </div>
    </section>
  );
};
