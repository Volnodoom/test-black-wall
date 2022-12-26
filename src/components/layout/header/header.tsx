import { Li } from "components/styled";
import * as S from "./header.style";

const Header = () => {
  return (
    <S.HeaderStyle>
      <S.HeaderWrapper>
        <S.HeaderMenuButton aria-label="menu" type="button">
          <S.HeaderMenuDecor aria-hidden="true" />
        </S.HeaderMenuButton>

        <S.HeaderLogo href="#" as="a">
          <S.HeaderLogoIcon aria-hidden="true" />
          <S.HeaderLogoText aria-hidden="true" />
        </S.HeaderLogo>

        <nav>
          <S.HeaderNavList>
            <Li>
              <S.HeaderNavLinkItem href="#">
                About
              </S.HeaderNavLinkItem>
            </Li>

            <Li>
              <S.HeaderNavLinkItem href="#" >
                Products
              </S.HeaderNavLinkItem>
            </Li>

            <Li>
              <S.HeaderNavLinkItem href="#">
                For teams
              </S.HeaderNavLinkItem>
            </Li>
          </S.HeaderNavList>
        </nav>

        <S.HeaderForm>
          <S.HederFormDecoration />
          <S.HeaderFormInput type="text" placeholder="Search..." maxLength={240} autoComplete="off"/>
        </S.HeaderForm>

        <S.HeaderAuthorizationList>
          <Li>
            <S.HeaderAuthorizationLogIn href="#">
              Log in
            </S.HeaderAuthorizationLogIn>
          </Li>

          <Li>
            <S.HeaderAuthorizationSignUp href="#">
              Sign up
            </S.HeaderAuthorizationSignUp>
          </Li>
        </S.HeaderAuthorizationList>

      </S.HeaderWrapper>
    </S.HeaderStyle>
  )
}

export default Header;
