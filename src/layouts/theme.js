import { css } from 'styled-components';

export default {
  colors: {
    primary: '#2d2d2d',
    secondary: '#ffffff',
    dark: '#2d2d2d',
  },
  fonts: {
    main: '"Roboto", sans-serif',
    heading: '"Iosevka", sans-serif',
    serif: 'serif',
  },
  snippets: {
    wrapper: css`
      max-width: 75rem;
      margin: auto;
    `,
  },
  mixins: {
    shadow: (n = 1, type = 'box') => {
      const shadows = [
        '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
        '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
        '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
        '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
        '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)',
      ];
      if (type === 'box') {
        return css`
          box-shadow: ${shadows[n - 1]};
        `;
      }
      return css`
        text-shadow: ${shadows[n - 1]};
      `;
    },
    visuallyhidden: (isHidden = true) => {
      if (isHidden) {
        return css`
          position: absolute;
          overflow: hidden;
          clip: rect(0 0 0 0);
          height: 1px;
          width: 1px;
          margin: -1px;
          padding: 0;
          border: 0;
        `;
      }
      return css`
        position: relative;
        overflow: auto;
        clip: auto;
        height: auto;
        width: auto;
        margin: 0;
        padding: 0;
        border: none;
      `;
    },
  },
};
