import styled, { css } from "styled-components";
import { CardContentWrapperType } from "types/style.type";

const commentSeparationDecor = css`
  padding-bottom: 16px;
  border-bottom: ${({ theme }) => `1px solid ${theme.color.greyLight}`};
`;

const CardWrapper = styled.div`
  margin: 0 auto;
  padding: 24px;
  width: calc(100% - 324px);
  min-width: 730px;
`;

const CardInfoWrapper = styled.div`
  margin-bottom: 16px;

  border-bottom: ${({ theme }) => `1px solid ${theme.color.greyLight}`};
`;

const CardInfoTitle = styled.h1`
  margin: 0 0 9px;

  font-size: ${({ theme }) => theme.font.medium};
  font-weight: 400;
  line-height: 35px;

  overflow-wrap: break-word;
`;

const CardInfoTime = styled.dl`
  display: flex;
  margin: 0;
  padding-bottom: 8px;

  font-size: ${({ theme }) => theme.font.subSmall};
  line-height: 17px;
`;

const CardInfoTimeTitle = styled.dt`
  margin-right: 5px;
  color: ${({ theme }) => theme.color.greyDecor};
  font-weight: 400;
`;

const CardInfoTimeData = styled.dd`
  margin: 0;
  margin-right: 15px;
`;

const CardContentWrapper = styled.div<CardContentWrapperType>`
  margin-bottom: 16px;
  padding-left: 60px;
  max-width: 650px;

  ${({ $isComment }) => $isComment && commentSeparationDecor}

  p {
    margin: 0;
    padding: 0 0 16px;

    font-size: ${({ theme }) => theme.font.small};
    line-height: 23px;
    text-align: justify;
  }

  pre {
    padding: 12px;
    margin-bottom: 24px;

    background-color: ${({ theme }) => theme.color.greyLight};
    font-size: ${({ theme }) => theme.font.subSmall};
    line-height: 17px;
    white-space: pre;
    overflow-x: scroll;
  }
`;

const CardAnswerTitle = styled.h2`
  margin-bottom: 24px;

  font-size: ${({ theme }) => theme.font.regular};
  line-height: 25px;
`;

export {
  CardWrapper,
  CardInfoWrapper,
  CardInfoTitle,
  CardInfoTime,
  CardInfoTimeTitle,
  CardInfoTimeData,
  CardContentWrapper,
  CardAnswerTitle,
}
