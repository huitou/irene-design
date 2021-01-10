import React, { Component, Fragment } from 'react';

import PageLayout from '../../layout/page';
import MainBodyLayout from '../../layout/bodys/main';
import Header from '../../contents/header';
import StringWithImage from '../../contents/string-with-image';
import { getI } from '../../utils';

// TODO
const smallWidths = [
  [ 36, 48, 48, 60, 80 ],
  [ 56, 74, 74, 93, 124 ],
  [ 56, 74, 74, 93, 124 ],
];

const smallHeights = [
  [ 56, 74, 74, 93, 124 ],
  [ 36, 48, 48, 60, 80 ],
  [ 36, 48, 48, 60, 80 ],
];
// ENDTODO

const contents = () => {
  const i = getI();

  return [
    {
      text1: 'The Skincare',
      text2: 'Quiz',
      textSmall: 'CUROLOGY',
      imageSmall: {
        src: '/images/quiz/non-hover.png',
        alt: 'Skin care quiz',
        width: smallWidths[0][i],
        height: smallHeights[0][i],
      },
      imageLarge: {
        src: '/images/quiz/hover.png',
        alt: 'Skin care quiz',
        width: 300,
        height: 465.06,
      },
    },
    {
      text1: '',
      text2: 'Period Tracker',
      textSmall: 'HERTILITY',
      imageSmall: {
        src: '/images/tracker/non-hover.png',
        alt: 'Period Tracker',
        width: smallWidths[1][i],
        height: smallHeights[1][i],
      },
      imageLarge: {
        src: '/images/tracker/hover.png',
        alt: 'Period Tracker',
        width: 450,
        height: 450,
      },
    },
    {
      text1: 'Fertility',
      text2: 'Dashboard',
      textSmall: 'HERTILITY',
      imageSmall: {
        src: '/images/dashboard/non-hover.png',
        alt: 'Fertility Dashboard',
        width: smallWidths[2][i],
        height: smallHeights[2][i],
      },
      imageLarge: {
        src: '/images/dashboard/hover.png',
        alt: 'Fertility Dashboard',
        width: 450,
        height: 450,
      },
    },
  ];
}
const paths = [
  '/skincare-quiz-case-study',
  '/viprive-case-study',
  '/kidsclub-case-study',
];

const bodyRender = () => (
  <MainBodyLayout
    area1Render={() => <StringWithImage content={contents()[0]} path={paths[0]} />}
    area2Render={() => <StringWithImage content={contents()[1]} path={paths[1]} />}
    area3Render={() => <StringWithImage content={contents()[2]} path={paths[2]} />}
  />
);

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewWidth: undefined,
    };

    this.setViewWidth = this.setViewWidth.bind(this);
  }

  setViewWidth() {
    this.setState({ viewWidth: window.innerWidth });
  }

  componentDidMount() {
    document.body.style.backgroundColor = '#d8d0e5';
    window.onresize = this.setViewWidth
  }

  // componentWillUnmount() {
  
  // }

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
