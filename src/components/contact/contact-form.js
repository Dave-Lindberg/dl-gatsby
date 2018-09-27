import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import LinkButton from '../link-button.js';

const CtForm = styled.form`
  grid-column: 2 / 2;
  grid-row: 2 / 2;
`;

const CtFieldset = styled.fieldset`
  display: grid;
  grid-template-rows: repeat(9, auto);
  @media (min-width: 768px) {
    grid-template-columns: minmax(max-content, 200px) auto;
    grid-template-rows: repeat(5, auto);
  }
`;

const CtLabel = styled.label`
  grid-column: 1 / 1;
  line-height: 1.8;
  vertical-align: top;
  font-size: 0.75em;
  margin: 0 0.5em;
  @media (min-width: 768px) {
    font-size: 1em;
  }
`;

const CtInput = styled.input`
  grid-column: 2 / 2;
  line-height: 1.8;
  vertical-align: top;
  margin: 0 .5em 1em .5em;
;
  border: 1px;
  border-radius: 6px
  padding: 10px;
`;

const CtInstructions = styled.div`
  grid-row: 1 / 2;
  grid-column: 1 / 2;
  font-size: 0.75em;
  color: #999999;
  margin: 0 0.5em 0.5em;
  text-align: center;
  @media (min-width: 768px) {
    grid-row: 1 / 1;
    grid-column: 1 / 3;
  }
`;

const CtLabelName = CtLabel.extend`
  grid-row: 2 / 2;
  grid-column: 1 / 1;
`;

const CtinputName = CtInput.extend`
  grid-row: 3 / 3;
  grid-column: 1 / 1;
  @media (min-width: 768px) {
    grid-row: 2 / 2;
    grid-column: 2 / 2;
  }
`;

const CtLabelEmail = CtLabel.extend`
  grid-row: 4 / 4;
  grid-column: 1 / 1;
  @media (min-width: 768px) {
    grid-row: 3 / 3;
    grid-column: 1 / 1;
  }
`;

const CtinputEmail = CtInput.extend`
  grid-row: 5 / 5;
  grid-column: 1 / 1;
  @media (min-width: 768px) {
    grid-row: 3 / 3;
    grid-column: 2 / 2;
  }
`;

const CtLabelPhone = CtLabel.extend`
  grid-row: 6 / 6;
  grid-column: 1 / 1;
  @media (min-width: 768px) {
    grid-row: 4 / 4;
    grid-column: 1 / 1;
  }
`;

const CtinputPhone = CtInput.extend`
  grid-row: 7 / 7;
  grid-column: 1 / 1;
  @media (min-width: 768px) {
    grid-row: 4 / 4;
    grid-column: 2 / 2;
  }
`;

const CtLabelMessage = CtLabel.extend`
  grid-row: 8 / 8;
  grid-column: 1 / 1;
  @media (min-width: 768px) {
    grid-row: 5 / 5;
    grid-column: 1 / 1;
  }
`;

const CtinputMessage = CtInput.extend`
  grid-row: 9 / 9;
  grid-column: 1 / 1;
  height: 6em;
  vertical-align: top;
  @media (min-width: 768px) {
    grid-row: 5 / 5;
    grid-column: 2 / 2;
    height: 4em;
  }
`;
const CtSend = LinkButton.extend`
  grid-row: 10 / 10;
  margin: 1em 0.5em !important;
  @media (min-width: 768px) {
    grid-row: 6 / 6;
    grid-column: 1 / 3;
  }
`;
const ContactForm = () => (
  <CtForm
    name="contact"
    method="POST"
    netlify-honeypot="bot-field"
    data-netlify="true"
  >
    <div
      style={{
        display: 'none'
      }}
    >
      <label>
        Don’t fill this out if you're human: <input name="bot-field" />
      </label>
    </div>
    <CtFieldset>
      <CtInstructions>
        Required fields are followed by <abbr title="required">*</abbr>
      </CtInstructions>
      <CtLabelName for="name">
        Name <abbr title="required">*</abbr>{' '}
      </CtLabelName>
      <CtinputName
        id="name"
        name="user_name"
        placeholder="Your Name"
        required
      />
      <CtLabelEmail for="email">
        Email <abbr title="required">*</abbr>{' '}
      </CtLabelEmail>
      <CtinputEmail
        id="email"
        name="user_email"
        placeholder="you@somewhere.com"
        required
        type="email"
      />
      <CtLabelPhone for="phone">Phone </CtLabelPhone>
      <CtinputPhone
        id="phone"
        name="user_phone"
        placeholder="000-000-0000"
        type="tel"
      />
      <CtLabelMessage for="message">
        Your Message <abbr title="required">*</abbr>{' '}
      </CtLabelMessage>
      <CtinputMessage
        id="message"
        name="user_message"
        placeholder="How can we help?"
        required
        type="textarea"
      />
      <div
        class="g-recaptcha"
        data-sitekey="6Legf3IUAAAAAOiXSEf0FSrjd9v4HrXTkVkryBiu"
      />
      <CtSend type="submit">Send it!</CtSend>
    </CtFieldset>
  </CtForm>
);

export default ContactForm;
