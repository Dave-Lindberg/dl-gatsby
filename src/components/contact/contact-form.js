import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import LinkButton from '../link-button.js';

const CtFieldset = styled.fieldset`
  grid-column: 2 / 2;
  grid-row: 2 / 2;
  display: grid;
  grid-template-columns: minmax(max-content, 200px) auto;
  grid-template-rows: repeat(3, auto);
`;

const CtOl = styled.ol``;
const CtLabel = styled.label`
  grid-column: 1 / 1;
  line-height: 1.8;
  vertical-align: top;
  @media (min-width: 768px) {
  }
`;

const CtInput = styled.input`
  grid-column: 2 / 2;
  line-height: 1.8;
  vertical-align: top;
  margin-bottom: 1em;
  @media (min-width: 768px) {
  }
`;

const ContactForm = () => (
  <CtFieldset>
    <CtLabel
      for="name"
      style={{
        gridRow: 1,
        gridColumn: 1
      }}
    >
      Name{' '}
    </CtLabel>
    <CtInput
      id="name"
      name="user_name"
      placeholder="Your Name"
      required
      style={{
        gridRow: 1,
        gridColumn: 2
      }}
    />
    <CtLabel for="email">Email </CtLabel>
    <CtInput
      id="email"
      name="user_email"
      placeholder="you@somewhere.com"
      required
      type="email"
    />
    <CtLabel for="message">Your Message </CtLabel>
    <CtInput
      id="message"
      name="user_message"
      placeholder="How can we help?"
      required
      type="textarea"
      style={{
        height: '4em',
        verticalAlign: 'text-top',
        boxSizing: 'border-box'
      }}
    />
    <LinkButton type="submit">Send it!</LinkButton>
  </CtFieldset>
);

export default ContactForm;
