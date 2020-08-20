import React, { Component, Fragment } from 'react';

import WorkPageLayout from '../../layout/work-page';
import TopContent from '../../contents/top';
import Introduction from '../../contents/introduction';
import Challenge from '../../contents/challenge';
import Solution from '../../contents/solution';
import Feedback from '../../contents/feedback';
import Learnings from '../../contents//learnings';
import Footer from '../../contents/footer';

const topImageSource = {
  src: '/images/work-3/group-814.png',
};
const work = 'Leftlovers';
const company = 'Mobile App From Scratch';
const type = '';

const titleText = 'A mobile app built from scratch that makes food sharing easy and cool.';
const introductionResources = [
  {
    id: 1,
    type: 'PARAGRAPH',
    text: 'I collaborated with Kids Club for 3 weeks, where I sought to improve their mobile app’s visual UI style. Their app is in beta. It gives parents and their children personalised reccomendations of events, activities and competitions based on their interests, so that children can utilise their talents and build self-confidence.',
  },
  {
    id: 2,
    type: 'PARAGRAPH',
    text: 'My initial design audit saw many opportunities for UI improvement throughout the entire app. However, due to time constraints, I narrowed the scope of this project to focus on key screens. I also conducted usability tests of the redesign to see if my changes actually improved the user experience. ',
  },
  {
    id: 3,
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
    text: '......One of the many challenges of this project was to come up with an idea for the premium product. I needed to find a way to create an experience that gave the user the opportunity — and a compelling reason — to subscribe. For this project, I also needed to choose an existing e-commerce brand as the fictitious company offering this service.',
  },
  {
    id: 2,
    type: 'PARAGRAPH',
    text: '......Additionally, I had to create different page designs for different user flows in order to take advantage of every opportunity to convert free users into paying customers. This posed additional UX challenges because the same UI had to be adapted to different formats, including a landing page and a pop-up.',
  },
  {
    id: 3,
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
    text: 'To solve our UI challenges, we created a colourful interface that would appeal to kids but that still reads as clean and sophisticated for their parents. We chose a bright yellow as primary colour since yellow is most associated with happiness and optimism, as well as creativity. Rounded shapes were also chosen for a sofert and more approachable feel.',
  },
  {
    id: 2,
    type: 'PARAGRAPH',
    text: 'Pablo style illustrations with their joyful yet cool and sophisticated look felt like a natural fit to class up the app. The wide range of Pablo illustrations also allowed us to easily pick an illustration for most event categories and achieve visual consistency.',
  },
  {
    id: 4,
    type: 'IMAGE',
    imageSource: {
      src: '/images/work-3/group-902.png',
      alt: 'Education Platform',
    },
  },
  {
    id: 5,
    type: 'IMAGE',
    imageSource: {
      src: '/images/work-3/group-902.png',
      alt: 'Education Platform',
    },
  },
];

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

class Work1Page extends Component {
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
            <Learnings resources={[]} />
          </Fragment>
        )}
        bottomRender={() => (<Footer />)}
      />
    );
  }
}

export default Work1Page;
