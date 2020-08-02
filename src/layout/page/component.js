import React, { Component, Fragment } from 'react';
import { func } from 'prop-types';

import { header, body, footer } from './component.css';

class PageLayout extends Component {

  render() {
    const { headerRender, bodyRender, footerRender } = this.props;

    return (
      <Fragment>
        <div className={header}>{headerRender()}</div>
        <div className={body}>{bodyRender()}</div>
        <div className={footer}>{footerRender()}</div>
      </Fragment>
    );
  }
}

PageLayout.propTypes = {
  headerRender: func,
  bodyRender: func,
  footerRender: func,
};

PageLayout.defaultProps = {
  headerRender: () => (<div>Header placeholder</div>),
  bodyRender: () => (<div>Body placeholder</div>),
  footerRender: () => (<div>Footer placeholder</div>),
};

export default PageLayout;
