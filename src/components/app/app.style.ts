import { createGlobalStyle } from "styled-components";
import SegoeUiRegular from 'assets/fonts/segoe-ui.woff';
import SegoeUiRegularWoff2 from 'assets/fonts/segoe-ui.woff2';
import SourceSansProRegular from 'assets/fonts/source-sans-pro-regular.woff';
import SourceSansProRegularWoff2 from 'assets/fonts/source-sans-pro-regular.woff2';
import SourceSansProBold from 'assets/fonts/source-sans-pro-bold.woff';
import SourceSansProBoldWoff2 from 'assets/fonts/source-sans-pro-bold.woff2';
import RobotoSlabRegular from 'assets/fonts/roboto-slab-regular.woff';
import RobotoSlabRegularWoff2 from 'assets/fonts/roboto-slab-regular.woff2';
import RobotoSlabBold from 'assets/fonts/roboto-slab-bold.woff';
import RobotoSlabBoldWoff2 from 'assets/fonts/roboto-slab-bold.woff2';
import { ThemeParametersType } from "types/style.type";

const GlobalStyle = createGlobalStyle<ThemeParametersType>`
@font-face {
  font-family: 'Segoe-UI';
  font-style: normal;
  font-weight: 400;
  src:  local('Segoe-UI'),
        url(${SegoeUiRegularWoff2}) format('woff2'),
        url(${SegoeUiRegular}) format('woff');
}

@font-face {
  font-family: 'Source-sans-pro';
  font-style: normal;
  font-weight: 400;
  src:  local('Source-sans-pro'),
        url(${SourceSansProRegularWoff2}) format('woff2'),
        url(${SourceSansProRegular}) format('woff');
}

@font-face {
  font-family: 'Source-sans-pro';
  font-style: normal;
  font-weight: 700;
  src:  local('Source-sans-pro'),
        url(${SourceSansProBoldWoff2}) format('woff2'),
        url(${SourceSansProBold}) format('woff');
}

@font-face {
  font-family: 'Roboto-slab';
  font-style: normal;
  font-weight: 400;
  src:  local('Roboto-slab'),
        url(${RobotoSlabRegularWoff2}) format('woff2'),
        url(${RobotoSlabRegular}) format('woff');
}

@font-face {
  font-family: 'Roboto-slab';
  font-style: normal;
  font-weight: 700;
  src:  local('Roboto-slab'),
        url(${RobotoSlabBoldWoff2}) format('woff2'),
        url(${RobotoSlabBold}) format('woff');
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  padding: 0;
}

body {
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;

  font-family: 'Source-sans-pro', Arial, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: ${({ theme }) => theme.font.regular };
  line-height: 25px;
  color: ${({ theme }) => theme.color.black};

  background-color: ${({ theme }) => theme.color.whiteImpure};
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

textarea {
  resize: none;
}

/* firefox placeholder \ invalid fix + ios bdrs */
input {
  border-radius: 0;
}

input::placeholder {
  opacity: 1;
}

input:invalid {
  box-shadow: none;
}

textarea {
  border-radius: 0;
}

textarea::placeholder {
  opacity: 1;
}

textarea:invalid {
  box-shadow: none;
}

select {
  border-radius: 0;
}

/* chrome search X removal */
input[type='search']::-webkit-search-decoration,
input[type='search']::-webkit-search-cancel-button,
input[type='search']::-webkit-search-results-button,
input[type='search']::-webkit-search-results-decoration {
  appearance: none;
}

/* input[number] arrows removal */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  margin: 0;

  appearance: none;
}

input[type='number'] {
  appearance: textfield;
}

/* ios button \ inputs reset */
select,
textarea,
input:matches([type='email'], [type='number'], [type='password'], [type='search'], [type='tel'], [type='text'], [type='url']) {
  appearance: none;
}

button,
[type='button'],
[type='reset'],
[type='submit'] {
  appearance: none;
}

.visually-hidden {
  position: absolute;

  width: 1px;
  height: 1px;
  margin: -1px;

  clip: rect(0 0 0 0);
}
`;


export {
  GlobalStyle,
};
