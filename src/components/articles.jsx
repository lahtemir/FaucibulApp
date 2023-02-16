import React from "react";
import articleImg1 from "../images/article1.jpg";
import articleImg2 from "../images/article2.jpg";
import articleImg3 from "../images/article3.jpg";
import Article from "./article";

const Articles = () => {
  return (
    <section className="articles" id="articles">
      <h2>LATEST ARTICLES</h2>
      <Article
        img={articleImg1}
        alt="articleImg"
        title="HOMES"
        content="Quis viverra nibh cras pulvinar mattis nunc sed. Amet consectetur adipiscing elit duis tristique sollicitudin nibh sit. Aliquet enim tortor at auctor urna. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus."
      />
      <Article
        img={articleImg2}
        alt="articleImg"
        title="PLANTS"
        content="Quis viverra nibh cras pulvinar mattis nunc sed. Amet consectetur adipiscing elit duis tristique sollicitudin nibh sit. Aliquet enim tortor at auctor urna. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus."
      />
      <Article
        img={articleImg3}
        alt="articleImg"
        title="DECOR"
        content="Quis viverra nibh cras pulvinar mattis nunc sed. Amet consectetur adipiscing elit duis tristique sollicitudin nibh sit. Aliquet enim tortor at auctor urna. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus."
      />
    </section>
  );
};

export default Articles;
