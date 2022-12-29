import styled from "styled-components";

const ContentLoadingWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 130px 0;
  margin: 0 auto;
  width: calc(100% - 324px);
`;

const ContentLoadingMessage = styled.p`
  margin: 0 auto;
  font-size: ${({ theme }) => theme.font.regularOver};
  line-height: 35px;
`;

export {
  ContentLoadingWrapper,
  ContentLoadingMessage,
}
