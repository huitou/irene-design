import React, { Component, Fragment } from 'react';

import WorkPageLayout from '../../layout/work-page';
import TopContent from '../../contents/top';
import Introduction from '../../contents/introduction';
import Challenge from '../../contents/challenge';
import Solution from '../../contents/solution';
import Feedback from '../../contents/feedback';

const topImageSource = {
  src: '/images/work-3/group-814.png',
};
const work = 'Skincare Quiz';
const company = 'GV Design Sprint';
const type = '';

const titleText = 'A quiz that makes finding the right products for your skin’s needs easy (and puppy-licious).';
const introductionResources = [
  {
    id: 1,
    type: 'PARAGRAPH',
    text: 'In March 2020, I ran a 5-day sprint to design a digital experience that helps people find the right skincare products for their skin. Bitesize UX provided the problem, project goals, constraints, and user research. The design sprint gave me experience with Agile development. I followed the Google Ventures design sprint process, modified for a solo designer.',
  },
  {
    id: 2,
    type: 'IMAGE',
    imageSource: {
      src: '/images/work-3/group-900.png',
      alt: 'Education Platform',
    },
  },
];

const challengeResources = [
  {
    id: 1,
    type: 'PARAGRAPH',
    text: 'My main objective was figuring out how to create an experience that addressed the needs of multiple users, each one with different skin types, tones, textures, concerns, and goals. I was tasked with identifying popular criteria brought up in the user research and mapping out the steps a user would take to achieve their goal.',
  },
  {
    id: 2,
    type: 'PARAGRAPH',
    text: 'Another task we needed to tackle was to create a design that matched the style of an existing skincare brand, but still coming up with an original experience. It was easy to imagine how to infuse the style of an existing brand into my screens, but how the user navigates through the different pieces of visual content was a much bigger challenge. ',
  },
  {
    id: 3,
    type: 'PARAGRAPH',
    text: 'An additional consideration was that I wanted to design an experience that felt inclusive and diverse. It was important for me to offer a safe space for all people, regardless of gender, sexuality or skin colour, to explore and learn more about skincare.',
  },
  {
    id: 4,
    type: 'IMAGE',
    imageSource: {
      src: '/images/work-3/group-901.png',
      alt: 'Education Platform',
    },
  },
];

const solutionResources = [
  {
    id: 1,
    type: 'PARAGRAPH',
    text: 'To help users achieve their goal, I designed a skincare quiz, an interactive questionnaire that recommends products based on the answers users give to a handful of questions about their skin and what they’re trying to achieve. After responding to our guided questions, the streamlined system walks users through the products that could work for them.',
  },
  {
    id: 2,
    type: 'IMAGE',
    imageSource: {
      src: '/images/work-3/group-902.png',
      alt: 'Education Platform',
    },
  },
  {
    id: 3,
    type: 'IMAGE',
    imageSource: {
      src: '/images/work-3/group-902.png',
      alt: 'Education Platform',
    },
  },
  {
    id: 4,
    type: 'PARAGRAPH',
    text: 'When designing this experience, I needed to keep in mind the visual style of my chosen skincare brand, Curology. Studying Curology’s brand thoroughly, I created page designs featuring their typical dark-purple-and-white colour palette and minimalistic feel used by the brand for the packaging of their skincare products.',
  },
  {
    id: 5,
    type: 'PARAGRAPH',
    text: 'To communicate a sense of inclusivity and diversity, I used images of puppies rather than people to avoid leaving out those who would not have been represented in the few photos I could have selected. And besides, everybody loves puppies!',
  },
  {
    id: 6,
    type: 'IMAGE',
    imageSource: {
      src: '/images/work-3/group-902.png',
      alt: 'Education Platform',
    },
  },
];

const feedbacks = [
  {
    content: 'Very fun and easy to use.',
    feedbacker: '— Francesca, 25',
  },
  {
    content: 'I really like the smooth navigation.',
    feedbacker: '— Josh, 23',
  },
  {
    content: 'Such cute images and original concept.',
    feedbacker: '— Nitay, 20',
  },
  {
    content: 'I would definitely use it for my skincare routine!',
    feedbacker: '— Emily, 19',
  },
];

class Work4Page extends Component {
  render() {
    return (
      <WorkPageLayout
        topRender={() => <TopContent work={work} company={company} imageSource={topImageSource} type={type} />}
        bodyRender={() => (
          <Fragment>
            <Introduction titleText={titleText} resources={introductionResources} />
            <Challenge resources={challengeResources} />
            <Solution resources={solutionResources} />
            <Feedback feedbacks={feedbacks} />
          </Fragment>
        )}
      />
    );
  }
}

export default Work4Page;