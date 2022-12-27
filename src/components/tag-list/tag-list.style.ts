import { Anchor, Ul } from "components/styled";
import styled from "styled-components";

const TagList = styled(Ul)`
display: flex;
flex-flow: row wrap;
gap: 4px;
`;

const TagLink = styled(Anchor)`
padding: 5px 6px;

color: ${({ theme }) => theme.color.blueText};
font-size: ${({ theme }) => theme.font.small};
line-height: 19px;

background-color: ${({ theme }) => theme.color.blueLight};

&:link,
&:visited {
  color: ${({ theme }) => theme.color.blueText};
}

&:hover,
&:active {
  color: ${({ theme }) => theme.color.blueHoverText};
  background-color: ${({ theme }) => theme.color.blueDark};
}
`;

export {
  TagList,
  TagLink,
}
