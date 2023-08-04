import React from "react";

const portfolioItems = [
  {
    name: "mowse",
    render: (
      <div className="portfolio-item">
        <div className="portfolio-item__title">Mowse: Founder</div>
        <div className="portfolio-item__desc">
          <div>Experience: Oct 2021 - Present</div>
          <div>
            NFT Gaming platform built on the Fantom Blockchain. This is Ryan's
            personal brand project that he has been working on since 2021
          </div>
        </div>
        <div className="portfolio-item__icon">
          <i className="fab fa-react"></i>
          <i className="fab fa-css3"></i>
          <i className="fab fa-js"></i>
        </div>
        <div className="portfolio-item__links">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://mowse-game.herokuapp.com/"
          >
            Website
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/MowsePack/MowseContracts"
          >
            More
          </a>
        </div>
      </div>
    ),
  },
  {
    name: "giddy",
    render: (
      <div className="portfolio-item">
        <div className="portfolio-item__title">Giddy: Full Stack Dev</div>
        <div className="portfolio-item__desc">
          <div>Experience: Mar 2023 - Present</div>
          <div>
            Giddy is the world's leading sexual health platform. At Giddy, Ryan
            created landing pages and helped migrate website to
            NextJS/TailwindCSS.
          </div>
        </div>
        <div className="portfolio-item__icon">
          <i className="fab fa-react"></i>
          <i className="fab fa-css3"></i>
          <i className="fab fa-js"></i>
        </div>
        <div className="portfolio-item__links">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://getmegiddy.com/"
          >
            Website
          </a>
        </div>
      </div>
    ),
  },
  {
    name: "amherst",
    render: (
      <div className="portfolio-item">
        <div className="portfolio-item__title">Amherst: Software Engineer</div>
        <div className="portfolio-item__desc">
          <div>Experience: Nov 2018 - Jan 2023</div>
          <div>
            Amherst is a Real Estate Technology company based in Austin. Ryan
            was on the Acquisitions team, migrating the legacy Acquisitions app
            from ASP.NET web app to React and maintaining legacy applications.
          </div>
        </div>
        <div className="portfolio-item__icon">
          <i className="fab fa-react"></i>
          <i className="fab fa-css3"></i>
          <i className="fab fa-js"></i>
        </div>
        <div className="portfolio-item__links">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.kwaddle.com"
          >
            Website
          </a>
        </div>
      </div>
    ),
  },
  {
    name: "kwaddle",
    render: (
      <div className="portfolio-item">
        <div className="portfolio-item__title">Kwaddle: Frontend Dev</div>
        <div className="portfolio-item__desc">
          <div>Experience: 2017 - 2018</div>
          <div>
            Platform for parents and kids to find after-school and summer camp
            activities!
          </div>
        </div>
        <div className="portfolio-item__icon">
          <i className="fab fa-html5"></i>
          <i className="fab fa-css3"></i>
          <i className="fab fa-js"></i>
          <i className="fab fa-python"></i>
        </div>
        <div className="portfolio-item__links">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.kwaddle.com"
          >
            Website
          </a>
        </div>
      </div>
    ),
  },
];

export default portfolioItems;