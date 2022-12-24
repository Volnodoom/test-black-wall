import styled, { css } from "styled-components";
import { Anchor, Button, Ul } from "components/styled";
import { ReactComponent as SearchIcon} from "assets/img/search.svg"
import { ReactComponent as LogoIcon} from "assets/img/logo-img.svg"
import { ReactComponent as LogoText} from "assets/img/logo-text.svg"
import { setDimensions } from "utils/mixins";

const greyHover = css`
  &:hover {
    background-color: ${({ theme }) => theme.color.greyLight};
  }
`;

const HeaderStyle = styled.header`
  display: flex;
  position: sticky;
  top: 0;
  margin: 0 auto;
  width: 1440px;
  height: 50px;

  background-color: ${({ theme }) => theme.color.whiteImpure};
  border-top: ${({ theme }) => `3px solid ${theme.color.orange}`};
  box-shadow: rgba(0, 0, 0, 0.05) 0 1px 2px 0,
              rgba(0, 0, 0, 0.05) 0 1px 4px 0,
              rgba(0, 0, 0, 0.05) 0 2px 8px 0;
`;

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;

  width: 1264px;
  height: 47px;
`;

const HeaderMenuButton = styled(Button)`
  display: block;
  padding: 0;
  margin: 0;

  width: 48px;
  height: 47px;

  ${greyHover};
`;

const HeaderMenuDecor = styled.div`
  width: 16px;
  height: 2px;
  margin: 0 auto;

  background-color: ${({ theme }) => theme.color.grey};
  box-shadow: ${({ theme }) => `0 5px 0 ${theme.color.grey}`},
              ${({ theme }) => `0 -5px 0 ${theme.color.grey}`};

`;

const HeaderLogo = styled(Button)`
  display: flex;
  align-items: center;

  height: 100%;
  padding: 0 8px;

  ${greyHover};
`;

const HeaderLogoIcon = styled(LogoIcon)`
  width: 20px;
  height: 30px;
`;

const HeaderLogoText = styled(LogoText)`
  width: 130px;
  height: 30px;
`;

const HeaderNavList = styled(Ul)`
  display: flex;
  flex-wrap: wrap;
  gap: 0 3px;
  margin-right: 8px;

  font-family: 'Segoe-UI';
`;

const HeaderNavLinkItem = styled(Anchor)`
  padding: 6px 12px;

  white-space: nowrap;

  &:link,
  &:visited {
    color: ${({ theme }) => theme.color.blackText};
  }

  &:hover,
  &:active {
    background-color: ${({ theme }) => theme.color.greyLight};
    border-radius: 100px;
  }
`

const HeaderForm = styled.form`
  position: relative;
  display: flex;
  margin-right: 8px;
  padding: 8px 9px;
  width: 660px;
  height: 35px;

  border: ${({ theme }) => `1px solid ${theme.color.greyLight}`};
  border-radius: 3px;

  &:focus-within {
    border-color: ${({ theme }) => theme.color.blue};
    outline: ${({ theme }) => `3px solid ${theme.color.blueLight}`};
    border-radius: 2px;
  }
`;

const HederFormDecoration = styled(SearchIcon)`
  margin-right: 5px;

  ${setDimensions(18)};
  content: '';
`;


const HeaderFormInput = styled.input`
  width: 100%;
  padding: 0;

  border: none;

  font-family: 'Segoe-UI';
  font-size: ${({ theme }) => theme.font.subSmall};
  line-height: 17px;

  background-color: ${({ theme }) => theme.color.whiteImpure};

  &:focus{
    outline: none;
  }
`;

const HeaderAuthorizationList = styled(Ul)`
  display: flex;
  flex-wrap: wrap;
  gap: 0 4px;
`;

const HeaderAuthorizationButtonLike = styled(Anchor)`
  padding: 8px 10px;

  border: ${({ theme }) => `1px solid ${theme.color.blue}`};
  border-radius: 3px;
`;

const HeaderAuthorizationLogIn = styled(HeaderAuthorizationButtonLike)`
  background-color: ${({ theme }) => theme.color.blueLight};
  color: ${({ theme }) => theme.color.blueText};
  box-shadow: rgba(255, 255, 255, 0.7) 0 1px 0 0 inset;

  &:link,
  &:visited {
    color: ${({ theme }) => theme.color.blueText};
  }

  &:hover,
  &:active {
    background-color: ${({ theme }) => theme.color.blueDark};
    color: ${({ theme }) => theme.color.blueHoverText};
  }
`;

const HeaderAuthorizationSignUp = styled(HeaderAuthorizationButtonLike)`
  background-color: ${({ theme }) => theme.color.blue};
  color: ${({ theme }) => theme.color.white};
  box-shadow: rgba(255, 255, 255, 0.4) 0 1px 0 0 inset;

  &:link,
  &:visited {
    color: ${({ theme }) => theme.color.white};
  }

  &:hover,
  &:active {
    background-color: ${({ theme }) => theme.color.blueDoubleDark};
  }
`;

export {
  HeaderStyle,
  HeaderWrapper,
  HeaderMenuButton,
  HeaderMenuDecor,
  HeaderLogo,
  HeaderNavList,
  HeaderNavLinkItem,
  HeaderForm,
  HeaderFormInput,
  HeaderAuthorizationList,
  HeaderAuthorizationLogIn,
  HeaderAuthorizationSignUp,
  HederFormDecoration,
  HeaderLogoIcon,
  HeaderLogoText,
}
