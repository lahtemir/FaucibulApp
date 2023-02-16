import React from "react";
import aboutImg from "../images/about.jpg";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-img">
        <img src={aboutImg} alt="" />
      </div>
      <article className="about-info">
        <h2>ABOUT</h2>
        <hr />
        <p>
          Sagittis nisl rhoncus mattis rhoncus urna neque. Bibendum enim
          facilisis gravida neque convallis a. Augue eget arcu dictum varius
          duis at consectetur. Donec ultrices tincidunt arcu non sodales neque
          sodales ut etiam. Arcu cursus vitae congue mauris. Odio ut sem nulla
          pharetra diam sit. Feugiat in fermentum posuere urna. Nec feugiat in
          fermentum posuere urna nec tincidunt praesent semper.
        </p>
      </article>
    </section>
  );
};

export default About;
