import React, { Component } from 'react';

import PageLayout from '../../layout/page';
import ProfileBodyLayout from '../../layout/bodys/profile';
import Header from '../../contents/header';
import ProgileArea1 from '../../contents/profile-area-1';
import ProgileArea2 from '../../contents/profile-area-2';
import Footer from '../../contents/footer';

const bodyRender = () => (
  <ProfileBodyLayout
    area1Render={() => <ProgileArea1 />}
    area2Render={() => <ProgileArea2 />}
  />
);

class ProfilePage extends Component {
  render() {
    return (
      <PageLayout
        headerRender={() => (<Header />)}
        bodyRender={bodyRender}
        footerRender={() => (<Footer />)}
      />
    );
  }
}

export default ProfilePage;
