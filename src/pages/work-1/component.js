import React, { Component, Fragment } from 'react';

import WorkPageLayout from '../../layout/work-page';
import TopContent from '../../contents/top';
import Introduction from '../../contents/introduction';
import Challenge from '../../contents/challenge';
import Solution from '../../contents/solution';
import Feedback from '../../contents/feedback';

const work = 'KidsClub Redesign';
const company = 'Dose Juice';
const titleText = 'A luxury digital destination for the fashion retail platform’s most loyal customers to discover the world’s most sought-after high jewelry and clothes.';

const introductionParagraphs = [
  'I collaborated with Kids Club for 3 weeks, where I sought to improve their mobile app’s visual UI style. Their app is in beta. It gives parents and their children personalised reccomendations of events, activities and competitions based on their interests, so that children can utilise their talents and build self-confidence.',
  'My initial design audit saw many opportunities for UI improvement throughout the entire app. However, due to time constraints, I narrowed the scope of this project to focus on key screens. I also conducted usability tests of the redesign to see if my changes actually improved the user experience.',
];
const introductionImageSource = {
  src: '/images/image-1.2.png',
  alt: 'Education Platform',
};

const challengeParagraphs = [
  'Creating a visual style that would appeal to young and older people was the first major UI hurdle since we needed to cater to both children (average age 6 to 14) and their parents as the app target audience.',
  'The second major UI experience was finding a set of illustrations to represent each event category like sport, fine art or cooking. The illustration would too have to work for both kids and adults. No budget was allocated to illustrations, so we needed to find a free illustration library.',
];
const challengeImageSource = {
  src: '/images/image-2.2.png',
  alt: 'Education Platform',
};

const solutionParagraphs = [
  'To solve our UI challenges, we created a colourful interface that would appeal to kids but that still reads as clean and sophisticated for their parents. We chose a bright yellow as primary colour since yellow is most associated with happiness and optimism, as well as creativity. Rounded shapes were also chosen for a sofert and more approachable feel.',
  'Pablo style illustrations with their joyful yet cool and sophisticated look felt like a natural fit to class up the app. The wide range of Pablo illustrations also allowed us to easily pick an illustration for most event categories and achieve visual consistency.',
];
const solutionVideoSource = {
  src: '/videos/vip-membership-video.mov',
  type: 'video/webm',
};
const solutionImageSource = {
  src: '/images/image-1.1.png',
  alt: 'Education Platform',
};

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
        topRender={() => <TopContent work={work} company={company} />}
        bodyRender={() => (
          <Fragment>
            <Introduction
              titleText={titleText}
              paragraphs={introductionParagraphs}
              imageSource={introductionImageSource}
            />
            <Challenge
              paragraphs={challengeParagraphs}
              imageSource={challengeImageSource}
            />
            <Solution
              paragraphs={solutionParagraphs}
              videoSource={solutionVideoSource}
              imageSource={solutionImageSource}
            />
            <Feedback feedbacks={feedbacks} />
          </Fragment>
        )}
      />
    );
  }
}

export default Work1Page;
