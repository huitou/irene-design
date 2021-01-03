import React, { Component } from 'react';

import PageLayout from '../../layout/page';
import AboutBodyLayout from '../../layout/bodys/about';
import Header from '../../contents/header';
import {
  stringWithImageArea,
  stringWithImageFrame,
  stringWithImageBox,
  stringWithImageLayout,
  contentText,
  imagePlaceholder,
  contentImage,

} from './component.css';

const content = {
  texts: [
    "Irene Lidia Wang is a Product Designer based in London,",
    "UK. She currently works in Hertility, a femtech company on a mission to put women's health first",
    ". She firmly believes in the power of design for social change and she’s open to discuss projects in sustainability",
    ", social justice",
    ", and physical and mental wellbeing",
    "."
  ],
  images: [
    {
      src: '/images/1.png',
      alt: 'Fertility Dashboard',
      width: 80,
      height: 100,
    },
    {
      src: '/images/2.png',
      alt: 'Fertility Dashboard',
      width: 48,
      height: 120,
    },
    {
      src: '/images/3.png',
      alt: 'Fertility Dashboard',
      width: 80,
      height: 100,
    },
    {
      src: '/images/4.png',
      alt: 'Fertility Dashboard',
      width: 48,
      height: 120,
    },
    {
      src: '/images/5.png',
      alt: 'Fertility Dashboard',
      width: 80,
      height: 100,
    },
  ],
};

const textRender = (text) => (
  <span className={contentText}>{text}</span>
);

const imageRender = (image) => (
  <span>
    <div className={imagePlaceholder} style={{ width: `${image.width}px` }}>
      <img className={contentImage}
        style={{
          width: `${image.width}px`,
          left: 0,
          bottom: `${ - image.height / 2 + 80 / 2}px`,
        }}
        src={image.src}
        alt={image.alt}
      />
    </div>
  </span>
);

const bodyRender = () => (
  <AboutBodyLayout
    areaRender={() => (
      <div className={stringWithImageArea}>
        <div className={stringWithImageFrame}>
          <div className={stringWithImageBox}>
            <div className={stringWithImageLayout}>
              <div>
                {textRender(content.texts[0])}
                {imageRender(content.images[0])}
                {textRender(content.texts[1])}
                {imageRender(content.images[1])}
                {textRender(content.texts[2])}
                {imageRender(content.images[2])}
                {textRender(content.texts[3])}
                {imageRender(content.images[3])}
                {textRender(content.texts[4])}
                {imageRender(content.images[4])}
                <span className={contentText}>{content.texts[5]}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )}
  />
);

class AboutPage extends Component {
  componentDidMount() {
    document.body.style.backgroundColor = '#df6439';
  }

  render() {
    return (
      <PageLayout
        activePage="ABOUT"
        headerRender={() => (<Header theme="DARK" activePage="ABOUT" />)}
        bodyRender={bodyRender}
        footerRender={() => {}}
      />
    );
  }
}

export default AboutPage;
