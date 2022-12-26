import styled from "styled-components";
import { ReactComponent as FindIcon } from "assets/img/find.svg";
import { ReactComponent as DiscoverIcon } from "assets/img/discover.svg";
import { setDimensions } from "utils/mixins";
import { Anchor, Li, Ul } from "components/styled";

const HeaderBase = styled.header`
  position: relative;
  margin: 0 auto;
  padding: 48px;
  z-index: 100;
`;

const HeaderFrame = styled.div`
  position: relative;
  margin-bottom: -128px;
  padding: 32px 32px 128px;
  height: 955px;
  z-index: 110;


  text-align: center;

  border-radius: 7px;
  background-image: ${({ theme }) => `
    linear-gradient(
      180deg,
      ${theme.color.blackGradientStart} 0%,
      ${theme.color.blackGradientEnd} 130%
    )
  `};

  overflow: hidden;

  &::after {
    position: absolute;
    bottom: -160px;
    left: 50%;

    content: '';

    width: 100%;
    height: 240px;
    transform: translateX(-50%);

    border-radius: 40%;
    background-color: ${({ theme }) => theme.color.whiteImpure};
  }
`;

const HeaderFrameChoices = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: auto;

  width: 880px;
`;

const HeaderChoiceBox = styled.div`
  position: relative;
  margin: 16px;
  padding: 24px;

  flex-basis: 50%;

  text-align: center;
  color: ${({ theme }) => theme.color.black};
`;

const HeaderChoiceLeft = styled(HeaderChoiceBox)`
  background-color: ${({ theme }) => theme.color.orangeLight};
  border-radius: 7px 7px 0 7px;

  &::after {
    position: absolute;
    top: 99%;
    right: 0;

    display: block;

    width: 32px;
    height: 32px;

    clip-path: polygon(18px 0, 32px 0, 0 40px, 0 38px, 0 0, 18px 0);
    border-radius: 0 5px 0;
    background: ${({ theme }) => theme.color.orangeLight};
    content: '';

    transform: scaleX(-1);
    left: auto;
  }
`;

const HeaderChoiceRight = styled(HeaderChoiceBox)`
  background-color: ${({ theme }) => theme.color.blueLight};
  border-radius: 7px 7px 7px 0;

  &::after {
    position: absolute;
    top: 99%;
    left: 0;

    display: block;

    width: 32px;
    height: 32px;

    clip-path: polygon(18px 0, 32px 0, 0 40px, 0 38px, 0 0, 18px 0);
    border-radius: 0 5px 0;
    background: ${({ theme }) => theme.color.blueLight};
    content: '';
  }
`;

const ChoiceDecorationLeft = styled(FindIcon)`
  margin-bottom: 16px;
  ${setDimensions(48)};

  color: ${({ theme }) => theme.color.orange};
`;

const ChoiceDecorationRight = styled(DiscoverIcon)`
  margin-bottom: 16px;
  ${setDimensions(48)};

  color: ${({ theme }) => theme.color.blue};
`;

const ChoiceMessage = styled.h2`
  margin: 0 29px 19px;

  text-align: center;
  font-size: ${({ theme }) => theme.font.regular};
  font-weight: 400;
`;

const ButtonLikeLink = styled(Anchor)`
  padding: 12px 32px;
  margin: 0 auto;
  width: 211px;

  font-weight: 700;
  color: ${({ theme }) => theme.color.white};
  border-radius: 5px;

  &:link,
  &:visited {
    color: ${({ theme }) => theme.color.white};
  }
`;

const ChoiceLeftButtonLike = styled(ButtonLikeLink)`
  background-color: ${({ theme }) => theme.color.orange};

  &:hover,
  &:active {
    background-color: ${({ theme }) => theme.color.orangeDoubleDark};
  }
`;

const ChoiceRightButtonLike = styled(ButtonLikeLink)`
  background-color: ${({ theme }) => theme.color.blue};

  &:hover,
  &:active {
    background-color: ${({ theme }) => theme.color.blueDoubleDark};
  }
`;

const ChoiceTextOption = styled.p`
  margin: 12px 0 0;

  font-size: ${({ theme }) => theme.font.subSmall};
  line-height: 17px;
`;

const ChoiceTextOptionLink = styled.a`
  text-decoration: underline;

  &:link,
  &:visited {
    color: ${({ theme }) => theme.color.black};

  }

  &:hover,
  &:active {
    color: ${({ theme }) => theme.color.orange};
  }
`;

const HeaderProduct = styled.h1`
  padding: 64px;
  margin: 0;

  font-family: 'Roboto-slab';
  font-weight: 700;
  font-size: ${({ theme }) => theme.font.huge};
  line-height: 72px;
  color: ${({ theme }) => theme.color.whiteImpure};
`;

const HeaderProductHighlight = styled.span`
  color: ${({ theme }) => theme.color.orange};
`;

const HeaderDecorInfoSplit = styled.span`
  position: relative;

  &::after {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);

    ${setDimensions(64, 8)};
    border-radius: 4px;

    background-color: ${({ theme }) => theme.color.greyDecor};
    content: '';
  }
`;

const HeaderBenefitsList = styled(Ul)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  padding: 32px 10px 64px;
  margin: 0 auto;

  width: 970px;

  font-family: 'Roboto-slab';
  text-align: center;
`;

const HeaderBenefitsItem = styled(Li)`
  padding: 32px 0;
`;

const HeaderBenefitsTitle = styled.span`
  display: block;
  margin: 0 0 4px;

  font-size: ${({ theme }) => theme.font.regularOver};
  font-weight: 700;
  line-height: 27px;
  color: ${({ theme }) => theme.color.whiteImpure};
`;

const HeaderBenefitsText = styled.p`
  margin: 0;
  padding: 0 20px;

  font-size: ${({ theme }) => theme.font.small};
  line-height: 20px;
  color: ${({ theme }) => theme.color.greyTextDark};
`;

const Square = styled.span`
  position: absolute;
  display: block;
  width: 128px;
  height: 128px;
  user-select: none;
  pointer-events: none;
  z-index: 50;

  &::before,
  &::after {
    position: absolute;
    top: 0;
    left: 0;

    width: 50%;
    height: 50%;

    border-radius: 13% 13% 0;
    background: currentColor;
    content: '';
  }

  &::after {
    top: 50%;
    left: 50%;
    opacity: .2;
    border-radius: 0 13% 13%;
  }
`;

const SquareDecorOne = styled(Square)`
  z-index: 50;
  top: 7px;
  left: 16px;

  color: ${({ theme }) => theme.color.blueDoubleDark};
`;

const SquareDecorTwo = styled(Square)`
  z-index: 50;
  top: 11px;
  right: 128px;

  color: ${({ theme }) => theme.color.blueLight};
`;

const SquareDecorThree = styled(Square)`
  z-index: 150;
  top: 128px;
  left: 128px;

  ${setDimensions(64)};
  color: ${({ theme }) => theme.color.gold};
`;

const SquareDecorFour = styled(Square)`
  z-index: 150;
  top: 50%;
  left: 15px;

  ${setDimensions(64)};
  color: ${({ theme }) => theme.color.green};
`;

const SquareDecorFive = styled(Square)`
  z-index: 150;
  top: 50%;
  right: 0;

  color: ${({ theme }) => theme.color.orange};
`;

const SquareDecorSix = styled(Square)`
  z-index: 150;
  bottom: 0;
  left: 128px;

  ${setDimensions(24)};
  color: ${({ theme }) => theme.color.blueLight};
`;

const SquareDecorSeven = styled(Square)`
  z-index: 150;
  bottom: 0;
  right: 128px;

  ${setDimensions(24)};
  color: ${({ theme }) => theme.color.gold};
`;

export {
  HeaderBase,
  HeaderFrame,
  HeaderFrameChoices,
  HeaderChoiceBox,
  HeaderChoiceLeft,
  HeaderChoiceRight,
  ChoiceDecorationLeft,
  ChoiceDecorationRight,
  ChoiceMessage,
  ChoiceLeftButtonLike,
  ChoiceRightButtonLike,
  ChoiceTextOption,
  ChoiceTextOptionLink,
  HeaderProduct,
  HeaderProductHighlight,
  HeaderDecorInfoSplit,
  HeaderBenefitsList,
  HeaderBenefitsItem,
  HeaderBenefitsTitle,
  HeaderBenefitsText,
  SquareDecorOne,
  SquareDecorTwo,
  SquareDecorThree,
  SquareDecorFour,
  SquareDecorFive,
  SquareDecorSix,
  SquareDecorSeven,
}

