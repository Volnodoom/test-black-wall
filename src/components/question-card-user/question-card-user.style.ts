import { Anchor } from "components/styled";
import styled from "styled-components";
import { setDimensions } from "utils/mixins";

const CardUserWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 16px 0;
  padding-top: 4px;
`;

const CardUserInteraction = styled.div`
  margin: 4px auto 4px 0;
`;

const CardUserInteractionLink = styled(Anchor)`
  display: inline-block;
  color: ${({ theme }) => theme.color.greyDecor};
  font-size: ${({ theme }) => theme.font.subSmall};
  line-height: 17px;

  &:not(:last-of-type) {
    margin-right: 10px;
  }

  &:link,
  &:visited,
  &:hover,
  &:active {
    color: ${({ theme }) => theme.color.greyDecor};
  }
`;

const CardUserInfo = styled.div`
  padding: 5px 6px 7px 7px;
  min-width: 200px;

  background-color: ${({ theme }) => theme.color.blueDark};
  border-radius: 5px;

  font-size: ${({ theme }) => theme.font.subSmall};
  line-height: 17px;
`;

const CardUserInfoUpload = styled.p`
  padding: 0;
  margin: 0 0 4px 0;
  color: ${({ theme }) => theme.color.greyDecor};
`;

const CardUserLink = styled(Anchor)`
  display: flex;
  gap: 0 8px;
  overflow-wrap: break-word;


`;

const CardUserLinkImg = styled.img`
  ${setDimensions(32)};
  border-radius: 10px;
`;

const CardUserLinkText = styled.p`
  padding: 0;
  margin: 0;
  order: 3;

  color: ${({ theme }) => theme.color.blueText};

  &:hover {
    color: ${({ theme }) => theme.color.blueHoverText};
  }
`;

export {
  CardUserWrapper,
  CardUserInteraction,
  CardUserInteractionLink,
  CardUserInfo,
  CardUserInfoUpload,
  CardUserLink,
  CardUserLinkText,
  CardUserLinkImg,
}
