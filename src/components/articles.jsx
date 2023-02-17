import React from "react";

import Article from "./article";
import { articles } from "../Data";

const Articles = () => {
  return (
    <section className="articles" id="articles">
      <h2>LATEST ARTICLES</h2>
      {articles.map((article) => {
        return (
          <Article
            key={article.id}
            img={article.img}
            alt={article.alt}
            title={article.title}
            content={article.content}
          />
        );
      })}
    </section>
  );
};

export default Articles;
