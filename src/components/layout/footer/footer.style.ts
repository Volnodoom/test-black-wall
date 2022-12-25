import styled from "styled-components";
import { ReactComponent as LogoImage } from "assets/img/logo-img.svg"
import { Anchor, Li, Ul } from "components/styled";

const Footer = styled.footer`
  display: flex;
  background-color: ${({theme}) => theme.color.black};

  font-family: 'Segoe-UI';
  font-size: ${({theme}) => theme.font.subSmall};
  line-height: 17px;
`;

const FooterWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;

  margin: 0 auto;
  padding: 32px 12px 12px;
  width: 1264px;
`;

const FooterLogoLink = styled(Anchor)`
  position: relative;
  top: -23px;

  margin-right: 32px;
`;

const FooterLogo = styled(LogoImage)`
  width: 32px;
  height: 49px;
`;

const FooterNav = styled.nav`
  display: flex;
  flex-flow: row wrap;
  flex: 2 1 auto;
`;

const FooterNavColumn = styled.div`
  flex: 1 0 auto;
  padding: 0 12px 24px 0;
`;

const FooterNavTitle = styled.h3`
  margin: 0 0 12px;

  text-transform: uppercase;
  font-weight: 700;
  color: ${({theme}) => theme.color.greyTextLight};
`;

const FooterNavTitleLink = styled(Anchor)`
  text-align: start;

  &:link,
  &:visited,
  &:hover,
  &:active {
    color: ${({theme}) => theme.color.greyTextLight};
  }
`;

const FooterNavItemListLink = styled(Anchor)`
  padding: 4px 0;
  text-align: start;

  color: ${({theme}) => theme.color.greyTextDark};

  &:link,
  &:visited {
    color: ${({theme}) => theme.color.greyTextDark};
  }

  &:hover,
  &:active {
    color: ${({theme}) => theme.color.greyTextLight};
  }
`;

const FooterNavItemListBrake = styled(Li)`
  margin-top: 16px;
`;

const FooterSocial = styled.div`
  display: flex;
  flex-direction: column;

  flex: 1 1 150px;
`;

const FooterSocialList = styled(Ul)`
  display: flex;
  gap: 0 12px;
  flex-flow: row wrap;

`;

const FooterSocialAdditionalInfo = styled.p`
  margin: auto 0 24px;
  color: ${({theme}) => theme.color.greyTextLight};
`;

export {
  Footer,
  FooterWrapper,
  FooterLogoLink,
  FooterLogo,
  FooterNav,
  FooterNavColumn,
  FooterNavTitle,
  FooterNavTitleLink,
  FooterNavItemListLink,
  FooterNavItemListBrake,
  FooterSocial,
  FooterSocialAdditionalInfo,
  FooterSocialList,
}
