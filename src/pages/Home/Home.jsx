import React from 'react';
import './Home.css';

import ChooseSection from '../../components/ChooseSection/ChooseSection';
import Blog from '../Blog/Blog';
import Pastevents from '../PastEvents/Pastevents';

const Home = () => {
  return (
    <div className='home-page'>
      <header className='d-flex align-items-center text-light'>
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
        <div style={{ margin: '2rem 0' }} />
        <ChooseSection />
        <div style={{ margin: '2rem 0' }} />
        <Blog />
        <div style={{ margin: '2rem 0' }} />
        <Pastevents />
        <div style={{ margin: '2rem 0' }} />
      </main>
    </div>
  );
}

export default Home;



