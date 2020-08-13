import React, { Component } from 'react';

import PageLayout from '../../layout/page';
import WorkPageLayout from '../../layout/work-page';
import TopContent from '../../contents/top';

class Work1Page extends Component {
  render() {
    return (
      <WorkPageLayout
        topRender={() => <TopContent />}
      />
    );
  }
}

export default Work1Page;
