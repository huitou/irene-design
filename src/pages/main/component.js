import React, { Component } from 'react';

import PageLayout from '../../layout/page';
import MainBodyLayout from '../../layout/bodys/main';
import Title from '../../contents/title';
import Images1 from '../../contents/images1';
import Images2 from '../../contents/images2';

const bodyRender = () => (
  <MainBodyLayout
    titleRender={() => <Title />}
    area1Render={() => <Images1 />}
    area2Render={() => <Images2 />}
  />
);

class MainPage extends Component {
  render() {
    return (
      <PageLayout
        headerRender={() => (<div>Header</div>)}
        bodyRender={bodyRender}
        footerRender={() => (<div>Footer</div>)}
      />
    );
  }
}

export default MainPage;
