import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import Header from '../components/Header/header.js';
import Footer from '../components/Footer/footer.js';

// import './index.css';

const TemplateWrapper = ({ children }) => (
  <div>
    <div
      className="page-wrap"
      style={{
        display: 'grid',
        margin: '0 auto',
        padding: '0px 0rem 0rem',
        gridTemplateColumns: '1fr',
        gridTemplateRows: 'repeat(3,auto)'
      }}
    >
      <Helmet
        titleTemplate={
          '%s | Dave Lindberg Marketing & Design • Lebanon, New Hampshire'
        }
        title={'Home'}
        meta={[
          {
            name: 'description',
            content:
              "We help people and companies bridge the gap between what's beautiful and what's effective. Delivering compelling solutions from the Upper Valley."
          },
          {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1'
          },
          {
            name: 'google-site-verification',
            content: 'lsmiySJBdF4A-Lhh4kZyBTzC8x8jPR_Dr8NTKYVmPnM'
          },
          {
            name: 'script',
            content: 'https://www.google.com/recaptcha/api.js'
          }
        ]}
      />

      {/* A little help for the Netlify bots if you\'re not using a SSG */}
      <form name="contact" netlify netlify-honeypot="bot-field" hidden>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <input type="text" name="email" />
        <textarea name="message"></textarea>
      </form>

      <Header
        style={{
          gridRow: 1
        }}
      />
      <div
        className="content-wrapper"
        style={{
          margin: '0 auto',
          /* maxWidth: 960,*/
          padding: '0px 0rem 0rem',
          gridRow: 2
        }}
      >
        {children()}
      </div>
      <Footer
        className="Footer"
        style={{
          gridRow: 3
        }}
      />
    </div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
