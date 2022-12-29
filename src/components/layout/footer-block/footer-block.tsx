import { Li, Ul } from "components/styled";
import { AppRoutes } from "utils/constants";
import * as S from "./footer.style";

const FooterBlock = () => {
  return (
    <S.Footer>
      <S.FooterWrapper>
        <S.FooterLogoLink to={AppRoutes.Blank} aria-label="Stack Overflow.">
          <S.FooterLogo aria-hidden="true" />
        </S.FooterLogoLink>

        <S.FooterNav>
          <S.FooterNavColumn>
            <S.FooterNavTitle>
              <S.FooterNavTitleLink to={AppRoutes.Blank}>
                Stack Overflow
              </S.FooterNavTitleLink>
            </S.FooterNavTitle>

            <Ul>
              <Li>
                <S.FooterNavItemListLink to={AppRoutes.Result}>
                  Questions
                </S.FooterNavItemListLink>
              </Li>

              <Li>
                <S.FooterNavItemListLink to={AppRoutes.Blank}>
                  Help
                </S.FooterNavItemListLink>
              </Li>
            </Ul>
          </S.FooterNavColumn>

          <S.FooterNavColumn>
            <S.FooterNavTitle>
              <S.FooterNavTitleLink to={AppRoutes.Blank}>
                Products
              </S.FooterNavTitleLink>
            </S.FooterNavTitle>

            <Ul>
              <Li>
                <S.FooterNavItemListLink to={AppRoutes.Blank}>
                  Teams
                </S.FooterNavItemListLink>
              </Li>

              <Li>
                <S.FooterNavItemListLink to={AppRoutes.Blank}>
                  Advertising
                </S.FooterNavItemListLink>
              </Li>

              <Li>
                <S.FooterNavItemListLink to={AppRoutes.Blank}>
                  Collectives
                </S.FooterNavItemListLink>
              </Li>

              <Li>
                <S.FooterNavItemListLink to={AppRoutes.Blank}>
                  Talent
                </S.FooterNavItemListLink>
              </Li>
            </Ul>
          </S.FooterNavColumn>

          <S.FooterNavColumn>
            <S.FooterNavTitle>
              <S.FooterNavTitleLink to={AppRoutes.Blank}>
                Company
              </S.FooterNavTitleLink>
            </S.FooterNavTitle>
            <Ul>
              <Li>
                <S.FooterNavItemListLink to={AppRoutes.Blank}>
                  About
                </S.FooterNavItemListLink>
              </Li>

              <Li>
                <S.FooterNavItemListLink to={AppRoutes.Blank}>
                  Press
                </S.FooterNavItemListLink>
              </Li>

              <Li>
                <S.FooterNavItemListLink to={AppRoutes.Blank}>
                  Work Here
                </S.FooterNavItemListLink>
              </Li>

              <Li>
                <S.FooterNavItemListLink to={AppRoutes.Blank}>
                  Legal
                </S.FooterNavItemListLink>
              </Li>

              <Li>
                <S.FooterNavItemListLink to={AppRoutes.Blank}>
                  Privacy Policy
                </S.FooterNavItemListLink>
              </Li>

              <Li>
                <S.FooterNavItemListLink to={AppRoutes.Blank}>
                  Terms of Service
                </S.FooterNavItemListLink>
              </Li>

              <Li>
                <S.FooterNavItemListLink to={AppRoutes.Blank}>
                  Contact Us
                </S.FooterNavItemListLink>
              </Li>

              <Li>
                <S.FooterNavItemListLink to={AppRoutes.Blank}>
                  Cookie Settings
                </S.FooterNavItemListLink>
              </Li>

              <Li>
                <S.FooterNavItemListLink to={AppRoutes.Blank}>
                  Cookie Policy
                </S.FooterNavItemListLink>
              </Li>
            </Ul>
          </S.FooterNavColumn>

          <S.FooterNavColumn>
            <S.FooterNavTitle>
              <S.FooterNavTitleLink to={AppRoutes.Blank}>
                Stack Exchange Network
              </S.FooterNavTitleLink>
            </S.FooterNavTitle>

            <Ul>
              <Li>
                <S.FooterNavItemListLink to={AppRoutes.Blank}>
                  Technology
                </S.FooterNavItemListLink>
              </Li>

              <Li>
                <S.FooterNavItemListLink to={AppRoutes.Blank}>
                  CUlture &amp; recreation
                </S.FooterNavItemListLink>
              </Li>

              <Li>
                <S.FooterNavItemListLink to={AppRoutes.Blank}>
                  Life &amp; arts
                </S.FooterNavItemListLink>
              </Li>

              <Li>
                <S.FooterNavItemListLink to={AppRoutes.Blank}>
                  Science
                </S.FooterNavItemListLink>
              </Li>

              <Li>
                <S.FooterNavItemListLink to={AppRoutes.Blank}>
                  Professional
                </S.FooterNavItemListLink>
              </Li>
              <Li>
                <S.FooterNavItemListLink to={AppRoutes.Blank}>
                  Business
                </S.FooterNavItemListLink>
              </Li>

              <S.FooterNavItemListBrake>
                <S.FooterNavItemListLink to={AppRoutes.Blank}>
                  API
                </S.FooterNavItemListLink>
              </S.FooterNavItemListBrake>

              <Li>
                <S.FooterNavItemListLink to={AppRoutes.Blank}>
                  Data
                </S.FooterNavItemListLink>
              </Li>
            </Ul>
          </S.FooterNavColumn>
        </S.FooterNav>

        <S.FooterSocial>
          <S.FooterSocialList>
            <Li>
              <S.FooterNavItemListLink to={AppRoutes.Blank}>
                Blog
              </S.FooterNavItemListLink>
            </Li>

            <Li>
              <S.FooterNavItemListLink to={AppRoutes.Blank}>
                Facebook
              </S.FooterNavItemListLink>
            </Li>

            <Li>
              <S.FooterNavItemListLink to={AppRoutes.Blank}>
                Twitter
              </S.FooterNavItemListLink>
            </Li>

            <Li>
              <S.FooterNavItemListLink to={AppRoutes.Blank}>
                LinkedIn
              </S.FooterNavItemListLink>
            </Li>

            <Li>
              <S.FooterNavItemListLink to={AppRoutes.Blank}>
                Instagram
              </S.FooterNavItemListLink>
            </Li>
          </S.FooterSocialList>

          <S.FooterSocialAdditionalInfo>
            Site design / logo © 2022 Stack Exchange Inc; user contributions
            licensed rev&nbsp;2022.12.21.43127
          </S.FooterSocialAdditionalInfo>
        </S.FooterSocial>
      </S.FooterWrapper>
    </S.Footer>
  );
};

export default FooterBlock;
