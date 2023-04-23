import { Global } from '@emotion/react';

// Font files are stored in the public folder
const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'Founders Grotesk';
        src: url('./fonts/WOFF2/founders-grotesk-regular.woff2') format('woff2');
      }

      @font-face {
        font-family: 'Domaine Text';
        src: url('./fonts/WOFF2/domaine-text-regular.woff2') format('woff2');
      }
    `}
  />
)

export default Fonts;