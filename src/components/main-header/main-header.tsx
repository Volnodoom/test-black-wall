import * as S from "./main-header.style";

const MainHeader = () => {
  return (
    <S.HeaderBase>
      <S.HeaderFrame>
        <S.HeaderFrameChoices>
          <S.HeaderChoiceLeft>
            <S.ChoiceDecorationLeft aria-hidden="true" />
            <S.ChoiceMessage>
              Find the best answer to your technical question, help others
              answer theirs
            </S.ChoiceMessage>
            <S.ChoiceLeftButtonLike href="/users/signup?ssrc=product_home">
              Join the community
            </S.ChoiceLeftButtonLike>
            <S.ChoiceTextOption>
              or{" "}
              <S.ChoiceTextOptionLink href="/questions">
                search content
              </S.ChoiceTextOptionLink>
            </S.ChoiceTextOption>
          </S.HeaderChoiceLeft>

          <S.HeaderChoiceRight>
            <S.ChoiceDecorationRight aria-hidden="true" />
            <S.ChoiceMessage>
              Want a secure, private space for your technical knowledge?
            </S.ChoiceMessage>

            <S.ChoiceRightButtonLike href="https://stackoverflow.co/teams">
              Discover Teams
            </S.ChoiceRightButtonLike>
          </S.HeaderChoiceRight>
        </S.HeaderFrameChoices>

        <S.HeaderProduct>
          Every
          <S.HeaderProductHighlight data-words="developer, data scientist, system admin, mobile developer, game developer">
            <span>developer</span>
            {/* <span>data scientist</span>
            <span>system admin</span>
            <span>mobile developer</span>
            <span>game developer</span> */}
          </S.HeaderProductHighlight>
          has a
          <br /> tab open to Stack Overflow
        </S.HeaderProduct>

        <S.HeaderDecorInfoSplit aria-hidden="true" />

        <S.HeaderBenefitsList>
          <S.HeaderBenefitsItem>
            <S.HeaderBenefitsTitle>100+ million</S.HeaderBenefitsTitle>
            <S.HeaderBenefitsText>
              monthly visitors to Stack Overflow &amp; Stack Exchange
            </S.HeaderBenefitsText>
          </S.HeaderBenefitsItem>

          <S.HeaderBenefitsItem>
            <S.HeaderBenefitsTitle>45.1+ billion</S.HeaderBenefitsTitle>
            <S.HeaderBenefitsText>
              Times a developer got help since 2008
            </S.HeaderBenefitsText>
          </S.HeaderBenefitsItem>

          <S.HeaderBenefitsItem>
            <S.HeaderBenefitsTitle>191% ROI</S.HeaderBenefitsTitle>
            <S.HeaderBenefitsText>
              from companies using Stack Overflow for Teams
            </S.HeaderBenefitsText>
          </S.HeaderBenefitsItem>

          <S.HeaderBenefitsItem>
            <S.HeaderBenefitsTitle>5,000+</S.HeaderBenefitsTitle>
            <S.HeaderBenefitsText>
              Stack Overflow for Teams instances active every day
            </S.HeaderBenefitsText>
          </S.HeaderBenefitsItem>
        </S.HeaderBenefitsList>
      </S.HeaderFrame>

      <S.SquareDecorOne aria-hidden="true" />
      <S.SquareDecorTwo aria-hidden="true" />
      <S.SquareDecorThree aria-hidden="true" />
      <S.SquareDecorFour aria-hidden="true" />
      <S.SquareDecorFive aria-hidden="true" />
      <S.SquareDecorSix aria-hidden="true" />
      <S.SquareDecorSeven aria-hidden="true" />
    </S.HeaderBase>
  );
};

export default MainHeader;
