import React from "react";
import style from "./Technology.module.css";
import imgPython from "./images/python.jpg";
import imgReact from "./images/react.png";
import imgErlang from "./images/erlang.jpg";
import imgR from "./images/r.png";
import imgGo from "./images/golang.png";
import imgD from "./images/d.jpg";
import imgJava from "./images/java.png";
import imgElixir from "./images/elixir.png";
import imgRust from "./images/rust.png";
import imgAmazon from "./images/amazon.jpg";
import imgDocker from "./images/docker.png";

const images = [imgPython, imgReact, imgErlang, imgR, imgD, imgGo, imgJava, imgElixir, imgRust, imgAmazon, imgDocker];

export const Technology: React.FC = () => {
  return (
    <section className={style.Container} id="technology">
      <h1>Technology</h1>
      <div className={style.AllArea}>
        <div>
          {images.map((image) => (
            <div className={style.ImageArea} key={image}>
              <img src={image} alt={image} />
            </div>
          ))}
        </div>
        <span>
          Here at NextRoll, we have a wide range of work. Our efforts are geared towards improving and further developing one of the biggest self-service
          marketing platforms. This is done by focusing on data pipelines, data visualization, machine learning, and platform usability. We use the
          infrastructure of AWS, Amazon web services, and its corresponding products—such as Dynamo, Kinesis, EC2, VMR, EMR, and S3—to serve 50 billion ad
          impressions per day, to scale very quickly in new markets, and to develop products whole lot faster. This in turn allows our engineers to divert most
          of their attention towards building products and helping businesses grow. Additionally, with the use of pixels, we use our internally built
          open-sourced library TrailDB and cross-device graph to map interactions into a holistic customer journey.
        </span>
      </div>
    </section>
  );
};
