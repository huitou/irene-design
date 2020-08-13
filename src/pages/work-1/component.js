import React, { Component, Fragment } from 'react';

import WorkPageLayout from '../../layout/work-page';
import TopContent from '../../contents/top';
import Introduction from '../../contents/introduction';
import Challenge from '../../contents/challenge';

class Work1Page extends Component {
  render() {
    return (
      <WorkPageLayout
        topRender={() => <TopContent />}
        bodyRender={() => (
          <Fragment>
            <Introduction />
            <Challenge />
            <Challenge />
          </Fragment>
        )}
      />
    );
  }
}

export default Work1Page;
