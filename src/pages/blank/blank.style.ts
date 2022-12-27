import { Anchor } from "components/styled";
import styled from "styled-components";

const BlankWrapping = styled.div`
  margin: 0 auto;
  padding: 150px 0;
  width: 522px;
`;

const BlankText = styled.p`
  margin: 0;
`;

const BlankLink = styled(Anchor)`
  color: ${({ theme }) => theme.color.orange};
  font-size: ${({ theme }) => theme.font.regular};
  line-height: 25px;
  text-align: end;

  &:link,
  &:visited {
    color: ${({ theme }) => theme.color.orange};
   }

  &:hover,
  &:active {
    color: ${({ theme }) => theme.color.blue};
   }
`;

export {
  BlankWrapping,
  BlankText,
  BlankLink,
}
