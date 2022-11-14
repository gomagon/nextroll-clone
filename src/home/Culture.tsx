import React from "react";
import style from "./Culture.module.css";
import image from "./images/members2.png";

export const Culture: React.FC = () => {
  return (
    <section className={style.Container} id="culture">
      <div className={style.AllArea}>
        <h1>Culture</h1>
        <img src={image} alt="members" />
        <span>
          We’ve hit a growth sweet spot—big enough to provide all the resources
          and perks you’d need and small enough for your voice to carry real
          weight. For the seventh time, NextRoll, formerly AdRoll Group, was
          ranked among the top large companies in the Bay Area by San Francisco
          Business Times’ Best Places to Work. We make sure to take care of our
          engineers. Whether you’re someone that needs more guidance, space to
          be creative, or work remotely—anywhere in the world—we have the
          culture to support it. Our founder Aaron Bell, is an engineer, so
          there is an emphasis to ensure that the team has the bandwidth to
          focus on the things that are most important to them. You’ll be given
          freedom, flexibility, and full ownership of your projects. Whether
          you're experienced or just learning these languages, we're looking for
          smart, proactive people who can roll with us. We’re an easygoing group
          filled with diverse personalities, so fitting in won’t be an issue. As
          we continue to grow and scale our global footprint, our team and
          culture remain stronger than ever.
        </span>
      </div>
    </section>
  );
};
