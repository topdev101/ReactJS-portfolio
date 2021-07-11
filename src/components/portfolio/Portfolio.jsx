import React from 'react';
import IMG3 from '../../assets/tvtalk.png';
import IMG5 from '../../assets/sportsbiz.png';
import IMG6 from '../../assets/ecommerce.png';

import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    
    {
      id: 4,
      title: 'Tvtalk',
      img: IMG3,
      description:
        'Fully responsive interactive website built based on Figma design',
      technologies: 'JavaScript | CSS | NextJS',
      link: 'https://tvtalk.app',
      github: '#',
    },
    {
      id: 5,
      title: 'Sportsbiz',
      img: IMG5,
      description:
        'Fully responsive interactive website built based on Figma design',
      technologies: 'JavaScript | CSS | Angular',
      link: 'https://sportsbiz.com',
      github: '#',
    },
    {
      id: 6,
      title: 'E-Commerce',
      img: IMG6,
      description:
        'E-Commerce Websites',
      technologies: 'JavaScript | React | CSS',
      link: 'https://demo.evershop.io/',
      github: '#',
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Visit Website
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
