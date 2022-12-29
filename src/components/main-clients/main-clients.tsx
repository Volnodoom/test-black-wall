import { AppRoutes } from "utils/constants";
import * as S from "./main-clients.style";

const MainClients = () => {
  return (
    <S.Clients>
      <S.ClientWrapper>
        <S.ClientCardLeft>
          <S.ClientCardLink to={AppRoutes.Result}>
            <S.HeaderLogoIcon aria-hidden="true" />
            <S.HeaderLogoText aria-hidden="true" />
          </S.ClientCardLink>

          <S.CardIllustrationSo aria-label="Illustration of Stack Overflow" />
          <S.CardTitle>
            A public platform building the definitive collection of coding
            questions &amp; answers
          </S.CardTitle>
          <S.CardText>
            A community-based space to find and contribute answers to technical
            challenges, and one of the most popular websites in the world.
          </S.CardText>

          <S.CardLeftButtonLike to={AppRoutes.Blank}>
            Join the community
          </S.CardLeftButtonLike>
          <S.CardTextOption>
            or{" "}
            <S.CardTextOptionLink to={AppRoutes.Result}>
              search content
            </S.CardTextOptionLink>
          </S.CardTextOption>
        </S.ClientCardLeft>

        <S.ClientCardRight>
          <S.ClientCardLink to={AppRoutes.Blank}>
            <S.LogoForTeams aria-hidden="true" />
          </S.ClientCardLink>

          <S.CardTeamsIllustration alt-label="Illustration of Stack Overflow for Teams" />

          <S.CardTitle>
            A private collaboration &amp; knowledge sharing SaaS platform for
            companies
          </S.CardTitle>
          <S.CardText>
            A web-based platform to increase productivity, decrease cycle times,
            accelerate time to market, and protect institutional knowledge.
          </S.CardText>

          <S.CardDecorBeyondWord>
            <S.CardDecorLine />
            <S.CardDecorWord>Get started</S.CardDecorWord>
            <S.CardDecorLine />
          </S.CardDecorBeyondWord>

          <S.CardButtonLikeWrapper>
            <S.CardRightButtonLike to={AppRoutes.Blank}>
              For large organizations <S.IconOrganization />
            </S.CardRightButtonLike>

            <S.CardRightButtonLike to={AppRoutes.Blank}>
              For small teams <S.IconPeople />
            </S.CardRightButtonLike>
          </S.CardButtonLikeWrapper>
        </S.ClientCardRight>
      </S.ClientWrapper>
    </S.Clients>
  );
};

export default MainClients;
