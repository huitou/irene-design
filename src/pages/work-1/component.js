import React, { Component, Fragment } from 'react';

import WorkPageLayout from '../../layout/work-page';
import TopContent from '../../contents/top';
import Introduction from '../../contents/introduction';
import Challenge from '../../contents/challenge';
import Solution from '../../contents/solution';
import Feedback from '../../contents/feedback';

const titleText = 'A luxury digital destination for the fashion retail platform’s most loyal customers to discover the world’s most sought-after high jewelry and clothes.';
const paragraphs = [
  'I collaborated with Kids Club for 3 weeks, where I sought to improve their mobile app’s visual UI style. Their app is in beta. It gives parents and their children personalised reccomendations of events, activities and competitions based on their interests, so that children can utilise their talents and build self-confidence.',
  'My initial design audit saw many opportunities for UI improvement throughout the entire app. However, due to time constraints, I narrowed the scope of this project to focus on key screens. I also conducted usability tests of the redesign to see if my changes actually improved the user experience.',
];

class Work1Page extends Component {
  render() {
    return (
      <WorkPageLayout
        topRender={() => <TopContent />}
        bodyRender={() => (
          <Fragment>
            <Introduction titleText={titleText} paragraphs={paragraphs} />
            <Challenge />
            <Solution />
            <Feedback />
          </Fragment>
        )}
      />
    );
  }
}

export default Work1Page;
