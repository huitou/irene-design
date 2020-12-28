import React, { Component, Fragment } from 'react';
// import VisibilitySensor from 'react-visibility-sensor';

import {
  stringWithImageArea,
  popped,
  titleText,
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

    return (
      <Fragment>
        <div className={`${overlay} ${hoverOn ? '' : hidden}`} />
        <div className={stringWithImageArea}>
          <span className={`${titleText} ${hoverOn ? popped : ''}`} onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut}>
            1st substring, bla bla ...
            <div className={imagePlaceholder}>
              <img className={imageSmall}
                src="/images/image-1.2.jpg"
                alt="KidsClub"
              />
            </div>
            2nd substring, bla bla ....
          </span>
        </div>
      </Fragment>
    );
  }
}

export default StringWithImage;
