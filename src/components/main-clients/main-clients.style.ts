import styled from "styled-components";
import { ReactComponent as LogoIcon} from "assets/img/logo-img.svg";
import { ReactComponent as LogoText} from "assets/img/logo-text.svg";
import { ReactComponent as IllustrationSO} from "assets/img/illustration-so.svg";
import { ReactComponent as OrganizationIcon} from "assets/img/organization.svg";
import { ReactComponent as PeopleIcon} from "assets/img/people.svg";
import { ReactComponent as ForTeamsLogo} from "assets/img/for-teams-logo.svg";
import { ReactComponent as IllustrationTeams} from "assets/img/illustration-teams.svg";

import { Anchor, ButtonLikeLink } from "components/styled";
import { setDimensions } from "utils/mixins";

const Clients = styled.section`
  position: relative;
  margin: -128px auto 0;
  padding: 32px;
  max-width: 1264px;

  z-index: 200;
`;

const ClientWrapper = styled.div`
  display: flex;
  gap: 0 32px;

  margin: 0 48px;
`;

const ClientCard = styled.div`
  flex-basis: 50%;
  margin: 16px 0;
  padding: 48px 0;

  text-align: center;
  border-radius: 7px;

  box-shadow: 0 12px 11px rgb(0 0 0 / 4%),
              0 100px 80px rgb(0 0 0 / 7%);
`;

const ClientCardLeft = styled(ClientCard)`
  background-image: ${({ theme }) => `
    linear-gradient(
      0deg,
      ${theme.color.orangeLight} 30%,
      ${theme.color.white}
    )
  `};
`;

const ClientCardRight = styled(ClientCard)`
  background-image: ${({ theme }) => `
    linear-gradient(
      0deg,
      ${theme.color.blueLight} 30%,
      ${theme.color.white}
    )
  `};
`;

const HeaderLogoIcon = styled(LogoIcon)`
  width: 30px;
  height: 45px;
`;

const HeaderLogoText = styled(LogoText)`
  width: 152px;
  height: 45px;
`;

const ClientCardLink = styled(Anchor)`
  display: flex;
  align-items: baseline;
  margin: -7px auto 32px;
  width: 187px;
  height: 37px;
`;

const CardIllustrationSo = styled(IllustrationSO)`
  margin-bottom: 32px;
  width: 520px;
  height: 346px;
`;

const CardTitle = styled.h2`
  margin: 0 48px 12px;

  font-family: 'Roboto-slab';
  font-size: ${({ theme }) => theme.font.medium};
  line-height: 35px;
`;

const CardText = styled.p`
  margin: 0 48px 32px;
  color: ${({ theme }) => theme.color.grey};
`;

const CardLeftButtonLike = styled(ButtonLikeLink)`
  background-color: ${({ theme }) => theme.color.orange};

  &:hover,
  &:active {
    background-color: ${({ theme }) => theme.color.orangeDoubleDark};
  }
`;

const CardTextOption = styled.p`
  margin: 12px 0 0;

  color: ${({ theme }) => theme.color.greyTextLight};
  font-size: ${({ theme }) => theme.font.subSmall};
  line-height: 17px;
`;

const CardTextOptionLink = styled(Anchor)`
  text-decoration: underline;

  &:link,
  &:visited {
    color: ${({ theme }) => theme.color.greyTextLight};
  }

  &:hover,
  &:active {
    color: ${({ theme }) => theme.color.orange};
  }
`;

const CardRightButtonLike = styled(ButtonLikeLink)`
  width: auto;
  background-color: ${({ theme }) => theme.color.blue};

  &:hover,
  &:active {
    background-color: ${({ theme }) => theme.color.blueDoubleDark};
  }
`;

const IconOrganization = styled(OrganizationIcon)`
  ${setDimensions(18)};
  vertical-align: bottom;
`;

const IconPeople = styled(PeopleIcon)`
  ${setDimensions(18)};
  vertical-align: bottom;
`;

const LogoForTeams = styled(ForTeamsLogo)`
  ${setDimensions(185, 37)};
`;

const CardTeamsIllustration = styled(IllustrationTeams)`
  margin-bottom: 32px;
  ${setDimensions(520, 346)};
`;

const CardDecorBeyondWord = styled.div`
  display: flex;
  align-items: center;

  margin: 0  auto 12px;
  width: 211px;
`;

const CardDecorLine = styled.span`
  width: 64px;
  height: 1px;
  background-color: ${({ theme }) => theme.color.blue};
`;

const CardDecorWord = styled.span`
  padding: 0 12px;

  font-size: ${({ theme }) => theme.font.subSmall};
  line-height: 17px;
  color: ${({ theme }) => theme.color.grey};
  white-space: nowrap;
`;

const CardButtonLikeWrapper = styled.div`
  display: flex;
  gap: 0 8px;
`;

export {
  Clients,
  ClientWrapper,
  ClientCardLeft,
  ClientCardRight,
  ClientCardLink,
  HeaderLogoIcon,
  HeaderLogoText,
  CardIllustrationSo,
  CardTitle,
  CardText,
  CardLeftButtonLike,
  CardTextOption,
  CardTextOptionLink,
  CardRightButtonLike,
  IconOrganization,
  IconPeople,
  LogoForTeams,
  CardTeamsIllustration,
  CardDecorBeyondWord,
  CardDecorLine,
  CardDecorWord,
  CardButtonLikeWrapper
}
