import React from "react";

const Article = (props) => {
  return (
    <article className="article">
      <img src={props.img} alt={props.alt} />
      <h3>{props.title}</h3>
      <hr />
      <p>{props.content}</p>
    </article>
  );
};

export default Article;
