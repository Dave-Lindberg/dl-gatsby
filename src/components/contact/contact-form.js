import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import LinkButton from '../link-button.js';

const CtFieldset = styled.fieldset`
  grid-column: 2 / 2;
  grid-row: 2 / 2;
  display: grid;
  grid-template-rows: repeat(7, auto);
  @media (min-width: 768px) {
    grid-template-columns: minmax(max-content, 200px) auto;
    grid-template-rows: repeat(3, auto);
  }
`;

const CtLabel = styled.label`
  grid-column: 1 / 1;
  line-height: 1.8;
  vertical-align: top;
`;

const CtInput = styled.input`
  grid-column: 2 / 2;
  line-height: 1.8;
  vertical-align: top;
  margin-bottom: 1em;
`;

const CtLabelName = CtLabel.extend`
  grid-row: 1 / 1;
  grid-column: 1 / 1;
`;

const CtinputName = CtInput.extend`
  grid-row: 2 / 2;
  grid-column: 1 / 1;
  @media (min-width: 768px) {
    grid-row: 1 / 1;
    grid-column: 2 / 2;
  }
`;

const CtLabelEmail = CtLabel.extend`
  grid-row: 3 / 3;
  grid-column: 1 / 1;
  @media (min-width: 768px) {
    grid-row: 2 / 2;
    grid-column: 1 / 1;
  }
`;

const CtinputEmail = CtInput.extend`
  grid-row: 4 / 4;
  grid-column: 1 / 1;
  @media (min-width: 768px) {
    grid-row: 2 / 2;
    grid-column: 2 / 2;
  }
`;
const CtLabelMessage = CtLabel.extend`
  grid-row: 5 / 5;
  grid-column: 1 / 1;
  @media (min-width: 768px) {
    grid-row: 3 / 3;
    grid-column: 1 / 1;
  }
`;

const CtinputMessage = CtInput.extend`
  grid-row: 6 / 6;
  grid-column: 1 / 1;
  height: 4em;
  vertical-align: top;
  @media (min-width: 768px) {
    grid-row: 3 / 3;
    grid-column: 2 / 2;
  }
`;
const CtSend = LinkButton.extend`
  grid-row: 7 / 7;
  margin-top: 1em;
  @media (min-width: 768px) {
    grid-row: 4 / 4;
    grid-column: 1 / 3;
  }
`;
const ContactForm = () => (
  <CtFieldset>
    <CtLabelName for="name">Name </CtLabelName>
    <CtinputName id="name" name="user_name" placeholder="Your Name" required />
    <CtLabelEmail for="email">Email </CtLabelEmail>
    <CtinputEmail
      id="email"
      name="user_email"
      placeholder="you@somewhere.com"
      required
      type="email"
    />
    <CtLabelMessage for="message">Your Message </CtLabelMessage>
    <CtinputMessage
      id="message"
      name="user_message"
      placeholder="How can we help?"
      required
      type="textarea"
    />
    <CtSend type="submit">Send it!</CtSend>
  </CtFieldset>
);

export default ContactForm;
