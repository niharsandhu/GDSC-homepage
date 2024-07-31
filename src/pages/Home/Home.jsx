import React from 'react';
import './Home.css';

import ChooseSection from '../../components/ChooseSection/ChooseSection';
import FaqAccordion from '../../components/FaqAccordion/FaqAccordion';
import Blog from '../Blog/Blog';

const Home = () => {
  return (
    <div className='home-page'>
      <header className='h-300 d-flex align-items-center text-light'>
        <div className='container d-flex flex-column align-items-center'>
          <h1 className='text-center fw-bolder'>Chitkara University Rajpura</h1>
          <p>1188 Group Members</p>
          <div className='d-flex flex-column flex-sm-row align-items-center'>
            <div className='social-buttons'>
              <a href='https://facebook.com' target='_blank' rel='noopener noreferrer'>
                <i className='fa fa-5x fa-facebook-square'></i>
              </a>
              <a href='https://twitter.com' target='_blank' rel='noopener noreferrer'>
                <i className='fa fa-5x fa-twitter-square'></i>
              </a>
              <a href='https://github.com' target='_blank' rel='noopener noreferrer'>
                <i className='fa fa-5x fa-github-square'></i>
              </a>
              <a href='https://snapchat.com' target='_blank' rel='noopener noreferrer'>
                <i className='fa fa-5x fa-snapchat-square'></i>
              </a>
            </div>
          </div>
        </div>
      </header>
      <main>
        <br />
        <ChooseSection />
        <br />
        <Blog />
        <br />
        <FaqAccordion />
        <br />
      </main>
    </div>
  );
}

export default Home;


