import React, { Component, Fragment } from 'react';
import { func } from 'prop-types';

import { area } from './component.css';

class AboutBodyLayout extends Component {

  render() {
    const { areaRender } = this.props;

    return (
      <Fragment>
        <div className={area}>{areaRender()}</div>
      </Fragment>
    );
  }
}

AboutBodyLayout.propTypes = {
  areaRender: func,
};

AboutBodyLayout.defaultProps = {
  areaRender: () => (<div>area placeholder</div>),
};

export default AboutBodyLayout;
