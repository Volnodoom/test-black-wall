import styled from "styled-components";

const Anchor = styled.a`
  display: block;
  text-align:  center;

  margin: 0;
  padding: 0;

  font-family: inherit;
  text-decoration: none;
  font-size: ${({ theme}) => theme.font.subSmall};
  line-height: 17px;
  font-weight: 400;

  color: ${({ theme }) => theme.color.grey};
  background-color: transparent;
  border: none;
  border-radius: 5px;

  cursor: pointer;
`;

export default Anchor;

