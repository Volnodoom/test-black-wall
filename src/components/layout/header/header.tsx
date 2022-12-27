import { Li } from "components/styled";
import { AppRoutes } from "utils/constants";
import * as S from "./header.style";

const Header = () => {
  return (
    <S.HeaderStyle>
      <S.HeaderWrapper>
        <S.HeaderMenuButton aria-label="menu" type="button">
          <S.HeaderMenuDecor aria-hidden="true" />
        </S.HeaderMenuButton>

        <S.HeaderLogo to={AppRoutes.Root}>
          <S.HeaderLogoIcon aria-hidden="true" />
          <S.HeaderLogoText aria-hidden="true" />
        </S.HeaderLogo>

        <nav>
          <S.HeaderNavList>
            <Li>
              <S.HeaderNavLinkItem to={AppRoutes.Blank}>
                About
              </S.HeaderNavLinkItem>
            </Li>

            <Li>
              <S.HeaderNavLinkItem to={AppRoutes.Blank}>
                Products
              </S.HeaderNavLinkItem>
            </Li>

            <Li>
              <S.HeaderNavLinkItem to={AppRoutes.Blank}>
                For teams
              </S.HeaderNavLinkItem>
            </Li>
          </S.HeaderNavList>
        </nav>

        <S.HeaderForm>
          <S.HederFormDecoration />
          <S.HeaderFormInput
            type="text"
            placeholder="Search..."
            maxLength={240}
            autoComplete="off"
          />
        </S.HeaderForm>

        <S.HeaderAuthorizationList>
          <Li>
            <S.HeaderAuthorizationLogIn to={AppRoutes.Blank}>
              Log in
            </S.HeaderAuthorizationLogIn>
          </Li>

          <Li>
            <S.HeaderAuthorizationSignUp to={AppRoutes.Blank}>
              Sign up
            </S.HeaderAuthorizationSignUp>
          </Li>
        </S.HeaderAuthorizationList>
      </S.HeaderWrapper>
    </S.HeaderStyle>
  );
};

export default Header;
