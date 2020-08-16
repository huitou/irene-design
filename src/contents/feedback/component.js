import React, { Component } from 'react';
import { object, arrayOf } from 'prop-types';

import FeedbackItem from '../feedback-item';

import {
  feedbackArea,
  feedbackFrame,
  textFrame,
  title,
  row,
  rowItem,
  itemLeft,
  itemRight,
} from './component.css';

const titleText = 'User feedback';

class Feedback extends Component {
  render() {
    const { feedbacks } = this.props;

    return (
      <div className={feedbackArea}>
        <div className={feedbackFrame}>
          <div className={textFrame}>
            <h3 className={title}>{titleText}</h3>
            <div className={row}>
              <div className={`${rowItem} ${itemLeft}`}>
                <FeedbackItem feedbackContentText={feedbacks[0].content} feedbackerText={feedbacks[0].feedbacker} />
              </div>
              <div className={`${rowItem} ${itemRight}`}>
                <FeedbackItem feedbackContentText={feedbacks[1].content} feedbackerText={feedbacks[1].feedbacker} />
              </div>
            </div>
            <div className={row}>
              <div className={`${rowItem} ${itemLeft}`}>
                <FeedbackItem feedbackContentText={feedbacks[2].content} feedbackerText={feedbacks[2].feedbacker} />
              </div>
              <div className={`${rowItem} ${itemRight}`}>
                <FeedbackItem feedbackContentText={feedbacks[3].content} feedbackerText={feedbacks[3].feedbacker} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Feedback.propTypes = {
  feedbacks: arrayOf(object).isRequired,
};

export default Feedback;
