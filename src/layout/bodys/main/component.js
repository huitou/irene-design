import React, { Component, Fragment } from 'react';
import { func } from 'prop-types';

import { title, area1, area2 } from './component.css';

class MainBodyLayout extends Component {

  render() {
    const { titleRender, area1Render, area2Render } = this.props;

    return (
      <Fragment>
        <div className={title}>{titleRender()}</div>
        <div className={area1}>{area1Render()}</div>
        <div className={area2}>{area2Render()}</div>
      </Fragment>
    );
  }
}

MainBodyLayout.propTypes = {
  titleRender: func,
  area1Render: func,
  area2Render: func,
};

MainBodyLayout.defaultProps = {
  titleRender: () => (<div>title placeholder</div>),
  area1Render: () => (<div>area1 placeholder</div>),
  area2Render: () => (<div>area2 placeholder</div>),
};

export default MainBodyLayout;
