import { css } from 'styled-components';
import IosevkaLight from '../data/fonts/iosevka-light.woff';
import IosevkaLight2 from '../data/fonts/iosevka-light.woff2';
import IosevkaRegular from '../data/fonts/iosevka-regular.woff';
import IosevkaRegular2 from '../data/fonts/iosevka-regular.woff2';
import IosevkaItalic from '../data/fonts/iosevka-italic.woff';
import IosevkaItalic2 from '../data/fonts/iosevka-italic.woff2';
import IosevkaBold from '../data/fonts/iosevka-bold.woff';
import IosevkaBold2 from '../data/fonts/iosevka-bold.woff2';
import RobotoLight from '../data/fonts/Roboto-Light.woff';
import RobotoLight2 from '../data/fonts/Roboto-Light.woff2';
import RobotoRegular from '../data/fonts/Roboto-Regular.woff';
import RobotoRegular2 from '../data/fonts/Roboto-Regular.woff2';
import RobotoItalic from '../data/fonts/Roboto-Italic.woff';
import RobotoItalic2 from '../data/fonts/Roboto-Italic.woff2';
import RobotoBold from '../data/fonts/Roboto-Bold.woff';
import RobotoBold2 from '../data/fonts/Roboto-Bold.woff2';

export default css`
  @font-face {
    font-family: 'Iosevka';
    src: local('Iosevka Light'), local('iosevka-light'),
      url('${IosevkaLight2}') format('woff2'),
      url('${IosevkaLight}') format('woff');
    font-weight: 200;
    font-style: normal;
  }
  @font-face {
    font-family: 'Iosevka';
    src: local('Iosevka Regular'), local('iosevka-regular'),
      url('${IosevkaRegular2}') format('woff2'),
      url('${IosevkaRegular}') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Iosevka';
    src: local('Iosevka Italic'), local('iosevka-italic'),
      url('${IosevkaItalic2}') format('woff2'),
      url('${IosevkaItalic}') format('woff');
    font-weight: normal;
    font-style: italic;
  }
  @font-face {
    font-family: 'Iosevka';
    src: local('Iosevka Bold'), local('iosevka-bold'),
      url('${IosevkaBold2}') format('woff2'),
      url('${IosevkaBold}') format('woff');
    font-weight: 700;
    font-style: normal;
  }
  @font-face {
    font-family: 'Roboto';
    src: local('Roboto Light'), local('Roboto-Light'),
      url('${RobotoLight2}') format('woff2'),
      url('${RobotoLight}') format('woff');
    font-weight: 300;
    font-style: normal;
  }
  @font-face {
    font-family: 'Roboto';
    src: local('Roboto Regular'), local('Roboto-Regular'),
      url('${RobotoRegular2}') format('woff2'),
      url('${RobotoRegular}') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Roboto';
    src: local('Roboto Italic'), local('Roboto-Italic'),
      url('${RobotoItalic2}') format('woff2'),
      url('${RobotoItalic}') format('woff');
    font-weight: normal;
    font-style: italic;
  }
  @font-face {
    font-family: 'Roboto';
    src: local('Roboto Bold'), local('Roboto-Bold'),
      url('${RobotoBold2}') format('woff2'),
      url('${RobotoBold}') format('woff');
    font-weight: 700;
    font-style: normal;
  }
`;
