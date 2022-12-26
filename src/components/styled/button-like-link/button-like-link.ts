import styled from "styled-components";
import Anchor from "../anchor/anchor";

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

export default ButtonLikeLink;
