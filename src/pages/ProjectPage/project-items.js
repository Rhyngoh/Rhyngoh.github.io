import React from 'react';

const projectItems = [{
  name: 'hot-words',
  render: (
    <div className='portfolio-item'>
      <div className='portfolio-item__title'>
        Hot Words
      </div>
      <div className='portfolio-item__desc'>
        1-week coding challenge: Race your friends to type the most words!
      </div>
      <div className='portfolio-item__icon'>
        <i className="fab fa-js"></i>
        <i className="fas fa-database"></i>
      </div>
      <div className='portfolio-item__links'>
        <a target="_blank" rel="noopener noreferrer" href="https://hotwords-1dcd8.firebaseapp.com/">Play</a>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/Rhyngoh/HotWords">More</a>
      </div>
    </div>
  )
}, {
  name: 'nyt-article-scrubber',
  render: (
    <div className='portfolio-item'>
      <div className='portfolio-item__title'>
        NYT Article Scrubber
      </div>
      <div className='portfolio-item__desc'>
        SPA using React, React-router, Express, Node
      </div>
      <div className='portfolio-item__icon'>
        <i className="fab fa-js"></i>
        <i className="fab fa-react"></i>
      </div>
      <div className='portfolio-item__links'>
        {/* <a target="_blank" rel="noopener noreferrer" href="https://warm-depths-86835.herokuapp.com/#/">Try it!</a> */}
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/Rhyngoh/NYTReact">More</a>
      </div>
    </div>
  )
}, {
  name: 'yum-yum-recipes',
  render: (
    <div className='portfolio-item'>
      <div className='portfolio-item__title'>
        Yum-Yum Recipes: Backend Dev
      </div>
      <div className='portfolio-item__desc'>
        Fullstack application using Node, Express, MySQL, Sequelize. Find recipes and create a shopping list.
      </div>
      <div className='portfolio-item__icon'>
        <i className="fab fa-html5"></i>
        <i className="fab fa-css3"></i>
        <i className="fab fa-js"></i>
      </div>
      <div className='portfolio-item__links'>
        {/* <a target="_blank" rel="noopener noreferrer" href="http://yum-yumrecipes.herokuapp.com/">Website</a> */}
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/Rhyngoh/ProjectDionysus">More</a>
      </div>
    </div>
  )
}, {
  name: 'map-your-life',
  render: (
    <div className='portfolio-item'>
      <div className='portfolio-item__title'>
        Map Your Life: Fullstack Dev
      </div>
      <div className='portfolio-item__desc'>
        First Project of Coding Bootcamp using AJAX, Firebase, Google Maps API, and Foursquare API to find restaurants near you.
      </div>
      <div className='portfolio-item__icon'>
        <i className="fab fa-js"></i>
        <i className="fab fa-foursquare"></i>
      </div>
      <div className='portfolio-item__links'>
        <a target="_blank" rel="noopener noreferrer" href="https://rhyngoh.github.io/ProjectPrometheus/">Website</a>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/Rhyngoh/ProjectPrometheus">More</a>
      </div>
    </div>
  )
}]

export default projectItems;