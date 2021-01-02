import React, { Component, Fragment } from 'react';

import PageLayout from '../../layout/page';
import MainBodyLayout from '../../layout/bodys/main';
import Header from '../../contents/header';
import StringWithImage from '../../contents/string-with-image';

const contents = [
  {
    text1: 'The Skincare',
    text2: 'Quiz',
    textSmall: 'CUROLOGY',
    imageSmall: {
      src: '/images/quiz/non-hover.png',
      alt: 'Skin care quiz',
      width: '80px',
    },
    imageLarge: {
      src: '/images/quiz/hover.png',
      alt: 'Skin care quiz',
    },
  },
  {
    text1: '',
    text2: 'Period Tracker',
    textSmall: 'HERTILITY',
    imageSmall: {
      src: '/images/tracker/non-hover.png',
      alt: 'Period Tracker',
      width: '124px',
    },
    imageLarge: {
      src: '/images/tracker/hover.png',
      alt: 'Period Tracker',
    },
  },
  {
    text1: 'Fertility',
    text2: 'Dashboard',
    textSmall: 'HERTILITY',
    imageSmall: {
      src: '/images/dashboard/non-hover.png',
      alt: 'Fertility Dashboard',
      width: '124px',
    },
    imageLarge: {
      src: '/images/dashboard/hover.png',
      alt: 'Fertility Dashboard',
    },
  },
];
const paths = [
  '/skincare-quiz-case-study',
  '/viprive-case-study',
  '/kidsclub-case-study',
];

const bodyRender = () => (
  <MainBodyLayout
    area1Render={() => <StringWithImage content={contents[0]} path={paths[0]} />}
    area2Render={() => <StringWithImage content={contents[1]} path={paths[1]} />}
    area3Render={() => <StringWithImage content={contents[2]} path={paths[2]} />}
  />
);

class MainPage extends Component {
  render() {
    return (
      <Fragment>
        <PageLayout
          activePage="WORK"
          headerRender={() => (<Header theme="LIGHT" activePage="WORK" />)}
          bodyRender={bodyRender}
          footerRender={() => {}}
        />
      </Fragment>
    );
  }
}

export default MainPage;
