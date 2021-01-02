import React, { Component, Fragment } from 'react';

import PageLayout from '../../layout/page';
import MainBodyLayout from '../../layout/bodys/main';
import Header from '../../contents/header';
import StringWithImage from '../../contents/string-with-image';

const bodyRender = () => (
  <MainBodyLayout
    area1Render={() => <StringWithImage path={'/skincare-quiz-case-study'} />}
    area2Render={() => <StringWithImage path={'/viprive-case-study'} />}
    area3Render={() => <StringWithImage path={'/kidsclub-case-study'} />}
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
        />
      </Fragment>
    );
  }
}

export default MainPage;
