import React, { Component, Fragment } from 'react';

import WorkPageLayout from '../../layout/work-page';
import TopContent from '../../contents/top';
import Introduction from '../../contents/introduction';
import Challenge from '../../contents/challenge';
import Solution from '../../contents/solution';
import Feedback from '../../contents/feedback';
import Learnings from '../../contents//learnings';
import Footer from '../../contents/footer';

import { title } from './component.css';

const topImageSource = {
  src: '/images/work-3/1.VIprive-Cover-min.jpg',
};
const work = 'VIPrivé';
const company = 'Free to Paid Conversion';
const type = '';

const titleText = 'A members-only luxury digital destination for Farfetch’s customers to discover the world’s most sought-after fashion brands.';
const introductionResources = [
  {
    id: 1,
    type: 'PARAGRAPH',
    text: 'In April 2020, I worked solo to simulate what it’s like to design an experience that allows users to subscribe to a premium (paid) product. Springboard provided the problem, project goals, constraints, and user research. This project gave me experience working with business goals, which in this case was achieving good conversion rates.',
  },
  {
    id: 3,
    type: 'IMAGE',
    imageSource: {
      src: '/images/work-3/2.Mockup-of-landing-page-min.jpg',
      alt: 'Mockup of landing page',
    },
  },
];

const challengeResources = [
  {
    id: 1,
    type: 'PARAGRAPH',
    text: 'One of the many challenges of this project was to come up with an idea for the premium product. I needed to find a way to create an experience that gave the user the opportunity — and a compelling reason — to subscribe. For this project, I also needed to choose an existing e-commerce brand as the fictitious company offering this service.',
  },
  {
    id: 2,
    type: 'PARAGRAPH',
    text: 'Additionally, I had to create different page designs for different user flows in order to take advantage of every opportunity to convert free users into paying customers. This posed additional UX challenges because the same UI had to be adapted to different formats, including a landing page and a pop-up.',
  },
  {
    id: 3,
    type: 'IMAGE',
    imageSource: {
      src: '/images/work-3/3.Images-of-shoes-used-for-this-project-min.jpg',
      alt: 'Images of shoes used for this project',
    },
  },
];

const solutionResources = [
  {
    id: 1,
    type: 'PARAGRAPH',
    text: 'I created VIPrivé, an online space offering users the unique opportunity to discover the world’s most exclusive high fashion maisons through a member-only service. I chose luxury fashion retail platform Farfetch as the fictitious company for this project and created a design that is consistent with their brand and visual style.',
  },
  {
    id: 2,
    type: 'PARAGRAPH',
    text: 'Along with private viewings of the newest standout and exclusive collections, VIPrivé customers have access to premium services including priority access, complimentary worldwide delivery, and a dedicated personal shopper who will help members select pieces from the curated collection.',
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
    type: 'PARAGRAPH',
    text: 'Call-to-action buttons placed in more than just one user flow give users many opportunities to easily subscribe to Farfetch’s paid product and become VIPrivé members. These CTA buttons ensure higher conversion rates than a page without them by compelling or reminding users to immediately take action.',
  },
  {
    id: 5,
    type: 'IMAGE',
    imageSource: {
      src: '/images/work-3/4.Mockup-of-pop-up-min.jpg',
      alt: 'Mockup of pop-up',
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

class Work3Page extends Component {
  render() {
    return (
      <WorkPageLayout
        topRender={() => <TopContent work={work} company={company} imageSource={topImageSource} type={type} />}
        bodyRender={() => (
          <Fragment>
            <Introduction titleText={titleText} titleClassName={title} resources={introductionResources} />
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

export default Work3Page;
