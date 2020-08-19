import React, { Component, Fragment } from 'react';

import WorkPageLayout from '../../layout/work-page';
import TopContent from '../../contents/top';
import Introduction from '../../contents/introduction';
import Challenge from '../../contents/challenge';
import Solution from '../../contents/solution';
import Feedback from '../../contents/feedback';
import Learnings from '../../contents//learnings';

const topImageSource = {
  src: '/images/work-3/group-814.png',
};
const work = 'OKids Club';
const company = 'Mobile App Redesign';
const type = '';

const titleText = 'The reimagining of a mobile app designed to encourage your little ones to live a healthier lifestyle.';
const introductionResources = [
  {
    id: 1,
    type: 'PARAGRAPH',
    text: 'In July 2020, I worked with the founders of an organic juice and smoothie startup to audit the UI visual style of their mobile app (beta). Due to confidentiality reasons, the names of the company and product have been changed to OJuice and OKidsClub, respectively, and the images have been replaced with free stock photos.',
  },
  {
    id: 2,
    type: 'PARAGRAPH',
    text: 'OKids Club is a platform that connects children and their parents with events and activities based on their interests, including categories like sports, art or science. The purpose of the app is to encourage their younger audience to get active and live a more social, healthier lifestyle promoted by the OJuice organic juices and smoothies.',
  },
  {
    id: 3,
    type: 'IMAGE',
    imageSource: {
      src: '/images/work-3/group-900.png',
      alt: 'Education Platform',
    },
  },
  {
    id: 4,
    type: 'PARAGRAPH',
    text: 'There were many opportunities for improvement throughout the entire app. With only 3 weeks together, we decided to focus on a few critical screens because we wanted to make a good impression on the user right away. After making such improvements, I then conducted usability tests of the new design with users already familiar with the app.',
  },
  {
    id: 5,
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
    text: 'The first major UI hurdle was to create a design that would appeal to both younger and more adult users, since our target audience was children (average age 6 to 14) and their parents. I was tasked with creating an interface that was perceived as fun for a kid yet sophisticated enough for a much older audience. I was given full artistic freedom to create the visual style for this product.',
  },
  {
    id: 2,
    type: 'PARAGRAPH',
    text: 'The second major UI challenge was making the design as accommodating as possible in providing enough space to add illustrations at a later date. Since before the start of the project, the company had already contacted an illustrator to create images for each category and required me to set the general visual style of the app as a blueprint for the illustrator.',
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
    text: 'To solve our UI challenges, we created a colourful yet clean interface to appeal to both target audiences. To appeal to the kids, we chose bright colours for interactive elements which people typically associate with organic juices as a nod to the OJuice brand’s mission of living a better and healthier lifestyle. Otherwise, neutral colours are used throughout the interface to class up the design and make it sophisticated enough for a more adult eye.',
  },
  {
    id: 2,
    type: 'PARAGRAPH',
    text: 'For the illustrations, we created a card for each event as a placeholder for the illustrator. We designed for each card a different background featuring liquid and smooth shapes, which communicate a sense of ease and safety and are also reminiscent of juices and smoothies. These patterned backgrounds bring consistency and harmony to the interface, and will help the illustrator more easily interpret the product’s overall visual style.',
  },
  {
    id: 3,
    type: 'VIDEO',
    videoSource: {
      src: '/videos/vip-membership-video.mov',
      type: 'video/mp4',
    },
  },
  {
    id: 4,
    type: 'IMAGE',
    imageSource: {
      src: '/images/work-3/group-902.png',
      alt: 'Education Platform',
    },
  },
];

const feedbacks = [
  {
    content: 'I love the colours!',
    feedbacker: '— Gwari, 7',
  },
  {
    content: 'The app looks beautiful and sophisticated.',
    feedbacker: '— Sandeep, 45',
  },
  {
    content: 'I really really like it.',
    feedbacker: '— Mark, 11',
  },
  {
    content: 'Such an improvement from the last version.',
    feedbacker: '— Anna, 52',
  },
];

const learningsResources = [
  {
    id: 1,
    type: 'IMAGE',
    imageSource: {
      src: '/images/work-3/group-902.png',
      alt: 'Education Platform',
    },
  },
  {
    id: 2,
    type: 'PARAGRAPH',
    text: 'There’s still a lot that can be improved this app, but I’m happy to have taken it a step in the right direction. If this was a longer internship, I would have really enjoyed ideating on new features and testing my assumptions. This would include researching user wants and needs, as well as challenges and frustrations in the problem space. I think it would also be valuable to work with development from the beginning of a project.',
  },
];

class Work3Page extends Component {
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
      />
    );
  }
}

export default Work3Page;
