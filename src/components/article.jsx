import React from "react";

const Article = ({ img, alt, title, content }) => {
  return (
    <article className="article">
      <img src={img} alt={alt} />
      <h3>{title}</h3>
      <hr />
      <p>{content}</p>
    </article>
  );
};

export default Article;
