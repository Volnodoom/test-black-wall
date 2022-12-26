import { Li, Ul } from "components/styled";
import * as S from "./footer.style";

const Footer = () => {
  return (
    <S.Footer>
      <S.FooterWrapper>
        <S.FooterLogoLink
          href="https://stackoverflow.com"
          aria-label="Stack Overflow."
        >
          <S.FooterLogo aria-hidden="true" />
        </S.FooterLogoLink>

        <S.FooterNav>
          <S.FooterNavColumn>
            <S.FooterNavTitle>
              <S.FooterNavTitleLink href="https://stackoverflow.com">
                Stack Overflow
              </S.FooterNavTitleLink>
            </S.FooterNavTitle>

            <Ul>
              <Li>
                <S.FooterNavItemListLink href="/questions">
                  Questions
                </S.FooterNavItemListLink>
              </Li>

              <Li>
                <S.FooterNavItemListLink href="/help">
                  Help
                </S.FooterNavItemListLink>
              </Li>
            </Ul>
          </S.FooterNavColumn>

          <S.FooterNavColumn>
            <S.FooterNavTitle>
              <S.FooterNavTitleLink href="#">Products</S.FooterNavTitleLink>
            </S.FooterNavTitle>

            <Ul>
              <Li>
                <S.FooterNavItemListLink href="https://stackoverflow.co/teams">
                  Teams
                </S.FooterNavItemListLink>
              </Li>

              <Li>
                <S.FooterNavItemListLink href="https://stackoverflow.co/advertising">
                  Advertising
                </S.FooterNavItemListLink>
              </Li>

              <Li>
                <S.FooterNavItemListLink href="https://stackoverflow.co/collectives">
                  Collectives
                </S.FooterNavItemListLink>
              </Li>

              <Li>
                <S.FooterNavItemListLink href="https://stackoverflow.co/talent">
                  Talent
                </S.FooterNavItemListLink>
              </Li>
            </Ul>
          </S.FooterNavColumn>

          <S.FooterNavColumn>
            <S.FooterNavTitle>
              <S.FooterNavTitleLink href="https://stackoverflow.co/">
                Company
              </S.FooterNavTitleLink>
            </S.FooterNavTitle>
            <Ul>
              <Li>
                <S.FooterNavItemListLink href="#">
                  About
                </S.FooterNavItemListLink>
              </Li>

              <Li>
                <S.FooterNavItemListLink href="#">
                  Press
                </S.FooterNavItemListLink>
              </Li>

              <Li>
                <S.FooterNavItemListLink href="#">
                  Work Here
                </S.FooterNavItemListLink>
              </Li>

              <Li>
                <S.FooterNavItemListLink href="#">
                  Legal
                </S.FooterNavItemListLink>
              </Li>

              <Li>
                <S.FooterNavItemListLink href="#">
                  Privacy Policy
                </S.FooterNavItemListLink>
              </Li>

              <Li>
                <S.FooterNavItemListLink href="#">
                  Terms of Service
                </S.FooterNavItemListLink>
              </Li>

              <Li>
                <S.FooterNavItemListLink href="#">
                  Contact Us
                </S.FooterNavItemListLink>
              </Li>

              <Li>
                <S.FooterNavItemListLink href="#">
                  Cookie Settings
                </S.FooterNavItemListLink>
              </Li>

              <Li>
                <S.FooterNavItemListLink href="#">
                  Cookie Policy
                </S.FooterNavItemListLink>
              </Li>
            </Ul>
          </S.FooterNavColumn>

          <S.FooterNavColumn>
            <S.FooterNavTitle>
              <S.FooterNavTitleLink href="#">
                Stack Exchange Network
              </S.FooterNavTitleLink>
            </S.FooterNavTitle>

            <Ul>
              <Li>
                <S.FooterNavItemListLink href="https://stackexchange.com/sites#technology">
                  Technology
                </S.FooterNavItemListLink>
              </Li>

              <Li>
                <S.FooterNavItemListLink href="https://stackexchange.com/sites#cUlturerecreation">
                  CUlture &amp; recreation
                </S.FooterNavItemListLink>
              </Li>

              <Li>
                <S.FooterNavItemListLink href="https://stackexchange.com/sites#lifearts">
                  Life &amp; arts
                </S.FooterNavItemListLink>
              </Li>

              <Li>
                <S.FooterNavItemListLink href="https://stackexchange.com/sites#science">
                  Science
                </S.FooterNavItemListLink>
              </Li>

              <Li>
                <S.FooterNavItemListLink href="https://stackexchange.com/sites#professional">
                  Professional
                </S.FooterNavItemListLink>
              </Li>
              <Li>
                <S.FooterNavItemListLink href="https://stackexchange.com/sites#business">
                  Business
                </S.FooterNavItemListLink>
              </Li>

              <S.FooterNavItemListBrake>
                <S.FooterNavItemListLink href="https://api.stackexchange.com/">
                  API
                </S.FooterNavItemListLink>
              </S.FooterNavItemListBrake>

              <Li>
                <S.FooterNavItemListLink href="https://data.stackexchange.com/">
                  Data
                </S.FooterNavItemListLink>
              </Li>
            </Ul>
          </S.FooterNavColumn>
        </S.FooterNav>

        <S.FooterSocial>
          <S.FooterSocialList>
            <Li>
              <S.FooterNavItemListLink href="#">Blog</S.FooterNavItemListLink>
            </Li>

            <Li>
              <S.FooterNavItemListLink href="https://www.facebook.com/officialstackoverflow/">
                Facebook
              </S.FooterNavItemListLink>
            </Li>

            <Li>
              <S.FooterNavItemListLink href="https://twitter.com/stackoverflow">
                Twitter
              </S.FooterNavItemListLink>
            </Li>

            <Li>
              <S.FooterNavItemListLink href="https://linkedin.com/company/stack-overflow">
                LinkedIn
              </S.FooterNavItemListLink>
            </Li>

            <Li>
              <S.FooterNavItemListLink href="https://www.instagram.com/thestackoverflow">
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

export default Footer;
