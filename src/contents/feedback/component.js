import React, { Component } from 'react';

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

const feedbacks = [
  {
    content: 'Very fun to use and beautiful to see.',
    feedbacker: '— Francesca, 25',
  },
  {
    content: 'I really like the smooth horizontal navigation.',
    feedbacker: '— Fuhang, 55',
  },
  {
    content: 'Such beautiful images and original concept.',
    feedbacker: '— Lorenzo, 20',
  },
  {
    content: 'Unlike anything I’ve ever seen!',
    feedbacker: '— Frances, 45',
  },
];


const titleText = 'User feedback';
const paragraph1 = 'Creating a visual style that would appeal to young and older people was the first major UI hurdle since we needed to cater to both children (average age 6 to 14) and their parents as the app target audience.';
const paragraph2 = "The second major UI experience was finding a set of illustrations to represent each event category like sport, fine art or cooking. The illustration would too have to work for both kids and adults. No budget was allocated to illustrations, so we needed to find a free illustration library. ";
const paragraph3 = undefined;

class Feedback extends Component {
  render() {
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

export default Feedback;
