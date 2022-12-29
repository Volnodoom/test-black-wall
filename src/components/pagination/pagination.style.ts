import { Anchor } from "components/styled";
import styled, { css } from "styled-components";
import { CardPaginationItemType } from "types/style.type";

const hoverPagination = css`
  &:hover {
    background-color: ${({ theme }) => theme.color.blueDark};
  }
`;

const PaginationWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 0 5px;
`;

const PaginationItem = styled(Anchor)<CardPaginationItemType>`
  display: ${({ $isHidden }) => $isHidden ? 'none' : 'block'};
  padding: 0 8px;

  border: ${({ theme }) => `1px solid ${theme.color.greyLight}`};
  border-radius: 5px;
  background-color: ${({ theme, $isSelected }) => $isSelected ? theme.color.orange : theme.color.whiteImpure};

  color: ${({ theme, $isSelected }) => $isSelected ? theme.color.white : theme.color.blackText};
  font-size: ${({ theme, $hasBigSize }) => $hasBigSize ? theme.font.regular : theme.font.subSmall};
  line-height: ${({ $hasBigSize }) => $hasBigSize ? '35px' : '25px'};

  &:link,
  &:visited {
    color: ${({ theme, $isSelected }) => $isSelected ? theme.color.white : theme.color.blackText};
  }

  ${({ $isSelected }) => !$isSelected && hoverPagination};
`;

export {
  PaginationWrapper,
  PaginationItem,
}
