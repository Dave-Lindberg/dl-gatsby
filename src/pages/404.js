import React from 'react';

const NotFoundPage = () => (
  <div>
    <h1>Oops.</h1>
    <p>The page you're looking for is currently offline. </p>
    {/* A little help for the Netlify bots if you\'re not using a SSG */}
    <form name="contact" netlify netlify-honeypot="bot-field" action="/index.html" hidden>
      <input type="text" name="user_name" />
      <input type="email" name="user_email" />
      <input type="text" name="user_phone" />
      <textarea name="user_message"></textarea>
    </form>

  </div>


);

export default NotFoundPage;
