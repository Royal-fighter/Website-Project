
import { links, social } from './data';
import logo from './logo.svg';
import React, { useState, useRef, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
function About() {
  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} className='logo' alt='logo' />
          <button className='nav-toggle' >
            <FaBars />
          </button>
        </div>
        <div className='links-container' >
          <ul className='links' >
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <ul className='social-icons'>
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
export default About