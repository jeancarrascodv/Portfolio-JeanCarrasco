"use client";
import './SignupWidget.css';
import PropTypes from 'prop-types';
import { useState } from 'react';

const SignupWidget = ({ title, content, simulateNetworkRequestTime }) => {
  // State to manage the email input and messages
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [busy, setBusy] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setBusy(true);
      // Wait 2 seconds (simulating a network request)
      await new Promise((resolve) => setTimeout(resolve, simulateNetworkRequestTime));
      setMessage(`Thanks for subscribing, ${email}!`);
      setIsSubscribed(true);
    } finally {
      setBusy(false);
    }
  }

  //onSubmit={(event)=>handleSubmit(event)}

  return (
    <form data-testid="signupWidget" className="signup-widget sm:max-w-sm " onSubmit={handleSubmit} autoComplete={'on'}>
      <h2 data-testid="signupWidgetTitle">{title}</h2>

      {isSubscribed && (
        <p data-testid="signupWidgetMessage" className="message">
          {message}
        </p>
      )}
      {!isSubscribed && (
        <>
          <p data-testid="signupWidgetContent">{content}</p>
          <div className={'input-row'}>
            <input
              type="email"
              data-testid="signupWidgetInput"
              required
              onInput={(val) => setEmail(val.target.value)}
              disabled={busy}
            />

            {/* TO-DO: add your code here for the email input field, with data-testid={'signupWidgetInput}

            Remember:
            - validate that the input type is an email address using the "type" attribute
            - make the input field required
            - if the email is not valid, a message will be displayed, and submission will be prevented
            */}

            <button data-testid="signupWidgetButton" type="submit" disabled={busy}>
              {busy ? 'Joining...' : 'Join'}
            </button>

            {/* TO-DO: add your code here for the submission button, with the data-testid={'signupWidgetButton}

            Remember:
            - the button type should be "submit"
            - before the button is clicked the button text should say "Join"
            - while the form is busy, the button text should say "Joining"
            - after the form is submitted, the join button is no longer visible
            - after the form is submitted, the page will say "Thanks for subscribing"
            */}
          </div>
        </>
      )}
    </form>
  );
};

SignupWidget.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  simulateNetworkRequestTime: PropTypes.number,
};

SignupWidget.defaultProps = {
  simulateNetworkRequestTime: 2000,
};

export default SignupWidget;
