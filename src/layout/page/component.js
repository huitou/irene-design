import React, { Component } from 'react';
import { func } from 'prop-types';

import { view, page, header, body, footer, work, about, contact } from './component.css';

const className = {
  WORK: work,
  ABOUT: about,
  CONTACT: contact,
};

class PageLayout extends Component {

  render() {
    const { headerRender, bodyRender, footerRender, activePage } = this.props;

    return (
      <div className={view}>
        <div className={`${page} ${className[activePage]}`}>
          <div className={header}>{headerRender()}</div>
          <div className={body}>{bodyRender()}</div>
          <div className={footer}>{footerRender()}</div>
        </div>
      </div>
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
