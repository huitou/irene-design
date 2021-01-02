import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';

import {
  stringWithImageArea,
  stringWithImageFrame,
  stringWithImageBox,
  stringWithImageLayout,
  popped,
  titleText,
  textPopped,
  smallTitleTextBox,
  smallTitleText,
  imagePlaceholder,
  imageSmall,
  imageLarge,
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
    const { history, content, path } = this.props

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
                  <span className={`${titleText} ${hoverOn ? textPopped : ''}`}>{content.text1}</span>
                  <span>
                    <div className={imagePlaceholder}
                      style={{ width: `${content.imageSmall.width}px` }}
                    >
                      {hoverOn
                        ?<img className={imageLarge}
                          style={{
                            width: `${content.imageLarge.width}px`,
                            left: `${ - content.imageLarge.width / 2 + content.imageSmall.width / 2}px`,
                            bottom: `${ - content.imageLarge.height / 2 + 80 / 2}px`,
                          }}
                          src={content.imageLarge.src}
                          alt={content.imageLarge.alt}
                        />
                        : <img className={imageSmall}
                          style={{
                            width: `${content.imageSmall.width}px`,
                            left: 0,
                            bottom: `${ - content.imageSmall.height / 2 + 80 / 2}px`,
                          }}
                          src={content.imageSmall.src}
                          alt={content.imageSmall.alt}
                        />
                      }
                      {/* <img className={imageLarge}
                        style={hoverOn
                          ? {
                            width: `${content.imageLarge.width}px`,
                            left: `${ - content.imageLarge.width / 2 + content.imageSmall.width / 2}px`,
                            bottom: `${ - content.imageLarge.height / 2 + 80 / 2}px`,
                          }
                          : {
                            width: `${content.imageSmall.width}px`,
                            left: 0,
                            bottom: `${ - content.imageSmall.height / 2 + 80 / 2}px`,
                          }
                        }
                        src={content.imageLarge.src}
                        alt={content.imageLarge.alt}
                      /> */}
                    </div>
                  </span>
                  <span className={`${titleText} ${hoverOn ? textPopped : ''}`}>{`${content.text2}  `}</span>
                  <span>
                    <div className={smallTitleTextBox}>
                      <span className={smallTitleText}>{content.textSmall}</span>
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
