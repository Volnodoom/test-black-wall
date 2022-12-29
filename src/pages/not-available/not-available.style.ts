import styled from "styled-components";
import { ReactComponent as NotAvailableSVG } from "assets/img/aware.svg"
import { setDimensions } from "utils/mixins";
import { Anchor } from "components/styled";

const NotAvailableWrapper = styled.div`
  display: flex;
  gap: 0 20px;
  padding: 150px;

  background-color: ${({ theme }) => theme.color.whiteImpure};
`;

const NotAvailablePic = styled(NotAvailableSVG)`
  ${setDimensions(196)};
  margin-top: -40px;
`;

const NotAvailableTitle = styled.h1`
  margin: 0 0 5px;
  font-size: ${({ theme }) => theme.font.medium};
  line-height: 35px;
  font-weight: 400;
`;

const NotAvailableContent = styled.p`
  margin: 0;
`;

const NotAvailableLink = styled(Anchor)`
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
  NotAvailableWrapper,
  NotAvailablePic,
  NotAvailableTitle,
  NotAvailableContent,
  NotAvailableLink,
}
