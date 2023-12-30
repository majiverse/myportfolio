/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/bg2.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Check my dribbble portfolio",
    description:
      "Dribbble serves as my primary digital canvas, showcasing the breadth and depth of my design expertise as both a graphic designer and a UI/UX specialist.",
    url: "https://dribbble.com/khntrrs",
  },
  {
    title: "Connect with me",
    description:
      "If you're interested in UI/UX design, let's connect on LinkedIn to exchange perspectives.",
    url: "https://www.linkedin.com/in/khiana-torres-465b55230/",
  },
  {
    title: "Read my mind",
    description:
      "I'm recently active on Medium! If you're interested in my thoughts on life learnings and design, I'd love for you to read and give me your feedback.",
    url: "https://medium.com/@khntrrs",
  },
  {
    title: "More soon",
    description:
      "",
    url: "",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Links</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
