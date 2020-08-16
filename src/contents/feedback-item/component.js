import React, { Component } from 'react';

import {
  feedbackItemArea,
  feedbackItemFrame,
  textFrame,
  feedbackContent,
  feedbacker,
} from './component.css';

const feedbackContentText = 'Very fun to use and beautiful to see.';
const feedbackerText = '— Francesca, 25';

class FeedbackItem extends Component {
  render() {
    return (
      <div className={feedbackItemArea}>
        <div className={feedbackItemFrame}>
          <div className={textFrame}>
            <div className={feedbackContent}>{feedbackContentText}</div>
            <div className={feedbacker}>{feedbackerText}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default FeedbackItem;
