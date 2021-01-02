import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';

import {
  stringWithImageArea,
  stringWithImageFrame,
  stringWithImageBox,
  stringWithImageLayout,
  popped,
  titleText,
  smallTitleTextBox,
  smallTitleText,
  imagePlaceholder,
  imageSmall,
  overlay,
  hidden,
} from './component.css';

class StringWithImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hoverOn: false,
      counter1: 0,
      counter2: 0,
    };

    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseOut = this.onMouseOut.bind(this);
  }

  onMouseOver() {
    this.setState((state) => ({ hoverOn: true, counter1: state.counter1 + 1 }));
  }
  onMouseOut() {
    this.setState((state) => ({ hoverOn: false, counter2: state.counter2 + 1 }));
  }

  render() {
    const { hoverOn } = this.state;
    const { history, path } = this.props

    return (
      <Fragment>
        <div className={`${overlay} ${hoverOn ? '' : hidden}`} />
        <div className={stringWithImageArea}>
          <div className={`${stringWithImageFrame} ${hoverOn ? popped : ''}`}>
            <div className={stringWithImageBox}
              onMouseOver={this.onMouseOver}
              onMouseOut={this.onMouseOut}
              onClick={() => history.push(path)}
            >
              <div className={stringWithImageLayout}>
                <div>
                  <span className={titleText}>The Skincare</span>
                  <span>
                    <div className={imagePlaceholder}>
                      <img className={imageSmall}
                        src="/images/image-1.2.jpg"
                        alt="KidsClub"
                      />
                    </div>
                  </span>
                  <span className={titleText}>Quiz  </span>
                  <span>
                    <div className={smallTitleTextBox}>
                      <span className={smallTitleText}>CUROLOGY</span>
                    </div>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default withRouter(StringWithImage);
