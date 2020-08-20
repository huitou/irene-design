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
  src: '/images/work-1/1.Skincare-quiz-cover-min.jpg',
};
const work = 'Skincare Quiz';
const company = 'GV Design Sprint';
const type = '';

const titleText = ['A quiz that makes finding the right products for your skin’s needs easy', '(and puppy-licious).'];
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
      src: '/images/work-1/2.Mockup-of-landing-page-min.jpg',
      alt: 'Mockup of landing page',
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
    text: 'An additional consideration was that I wanted my design to make the user feel at ease throughout the entire process of finding the right product for their needs. Skin issues can be a sensitive and stressful matter for many people and we needed to make sure that users didn’t drop out of the experience out of frustration.',
  },
  {
    id: 4,
    type: 'IMAGE',
    imageSource: {
      src: '/images/work-1/3.Images-of-puppies-used-for-this-project-min.jpg',
      alt: 'Images of puppies used for this project',
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
      src: '/images/work-1/4.Mockups-of-skincare-quiz-page-screens-min.jpg',
      alt: 'Mockups of skincare quiz page screens',
    },
  },
  {
    id: 4,
    type: 'PARAGRAPH',
    text: 'When designing this experience, I needed to keep in mind the visual style of my chosen skincare brand, Curology. Studying Curology’s brand thoroughly, I created page designs featuring their typical dark-purple-and-white colour palette and minimalistic feel used for the packaging of Curology’s skincare products.',
  },
  {
    id: 5,
    type: 'PARAGRAPH',
    text: 'I used images of puppies instead of people to move user attention away from the skin issues users might have and make the overall process of achieving better skin less stressful. This ensures users don’t drop out of the experience out of frustration and stay engaged throughout. And besides, everybody loves puppies!',
  },
  {
    id: 6,
    type: 'IMAGE',
    imageSource: {
      src: '/images/work-1/5.Mockup-of-skincare-quiz-page-screen-min.jpg',
      alt: 'Mockup of skincare quiz page screen',
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

const learningsResources = [
  {
    id: 1,
    type: 'IMAGE',
    imageSource: {
      src: "/images/work-1/6.Image-of-Curology's-logo-min.jpg",
      alt: "Image of Curology's logo",
    },
  },
  {
    id: 2,
    type: 'PARAGRAPH',
    text: 'A design sprint allows the product team to quickly test out ideas in an Agile environment. I ran a modified sprint for a solo designer, and the GV sprint processes are slightly different on a team. For example, on Day 2, I would run through lightning demos with a team and discuss pros and cons of competitor designs. We would also vote on the solution sketches and decide on the storyboard. I’m excited to bring what I learned over to a team environment, and I feel comfortable working through the process.',
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
            <Learnings resources={learningsResources} />
          </Fragment>
        )}
        bottomRender={() => (<Footer />)}
      />
    );
  }
}

export default Work4Page;
