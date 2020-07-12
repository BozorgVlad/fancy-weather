import MqInit from 'styled-components-media-query';

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
};

export const bp = {
  s: 319, sl: 425, m: 768, ml: 1024, l: 1200, xl: 1440, xxl: 2560,
};
export const mq = MqInit({ bp });

const device = Object.keys(size).reduce((acc, key) => {
  acc[key] = (style) => `
    @media (min-width: ${size[key]}) {
      ${style};
    }
  `;
  return acc;
}, {});

export default device;
