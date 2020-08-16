import React, { Component } from 'react';

import {
  feedbackItemArea,
  feedbackItemFrame,
  textFrame,
  feedbackContent,
  feedbacker,
} from './component.css';
import { string } from 'prop-types';

class FeedbackItem extends Component {
  render() {
    const { feedbackContentText, feedbackerText } = this.props;
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

FeedbackItem.propTypes = {
  feedbackContentText: string.isRequired,
  feedbackerText: string.isRequired,
};

export default FeedbackItem;
