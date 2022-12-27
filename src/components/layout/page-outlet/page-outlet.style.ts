import styled from "styled-components";

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const PageOutletWrapper = styled.main`
  width: 100%;
  flex-grow: 1;
`;

export {
  PageOutletWrapper,
  PageWrapper,
};
