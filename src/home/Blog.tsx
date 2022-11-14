import React from "react";
import blogImage1 from "./images/ferris.gif";
import blogImage2 from "./images/embracing.jpg";
import blogImage3 from "./images/typewriter.jpg";
import blogImage4 from "./images/rustenstein.png";
import style from "./Blog.module.css";

type blogType = {
  imgUrl: string;
  title: string;
  date: string;
  author: string;
};

const blogDatas: blogType[] = [
  {
    imgUrl: blogImage1,
    title: "Runtime errors: Come again? Rust macros to the rescue.",
    date: "June 21, 2022",
    author: "By Petar Dambovaliev",
  },
  {
    imgUrl: blogImage2,
    title: "Embracing ARM",
    date: "May 16, 2022",
    author: "By Chris Evans",
  },
  {
    imgUrl: blogImage3,
    title: "Introducing Rebar3 TypEr",
    date: "April 27, 2022",
    author: "By Mackenzie Morgan",
  },
  {
    imgUrl: blogImage4,
    title: "Rustenstein 3D: Game programming like it's 1992",
    date: "February 02, 2022",
    author: "By Facundo Olano",
  },
];

export const Blog: React.FC = () => {
  return (
    <section className={style.Container} id="blog">
      <h1 style={{ textAlign: "center" }}>Featured Blog Posts</h1>
      <div className={style.BlogAreas}>
        {blogDatas.map((blog) => (
          <div className={style.BlogArea} key={blog.imgUrl}>
            <img src={blog.imgUrl} alt={blog.author} />
            <div>
              <span className={style.TitleSpan}>{blog.title}</span>
              <span className={style.DateSpan}>{blog.date}</span>
              <span className={style.AuthorSpan}>{blog.author}</span>
            </div>
          </div>
        ))}
      </div>
      <div style={{ margin: "30px", textAlign: "center" }}>
        <span className={style.LinkSpan1}>More blog posts</span>
        <span className={style.LinkSpan2}>&#12297;</span>
      </div>
    </section>
  );
};
