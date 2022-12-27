import { AppRoutes } from "utils/constants";
import * as S from "./question-card-user.style";

type QuestionCardUserType = {
  userName: string;
  timeUpdate: string;
};

const QuestionCardUser = ({ userName, timeUpdate }: QuestionCardUserType) => {
  return (
    <S.CardUserWrapper>
      <S.CardUserInteraction>
        <S.CardUserInteractionLink to={AppRoutes.Blank}>
          Share
        </S.CardUserInteractionLink>
        <S.CardUserInteractionLink to={AppRoutes.Blank}>
          Follow
        </S.CardUserInteractionLink>
      </S.CardUserInteraction>

      <S.CardUserInfo>
        <S.CardUserInfoUpload>
          asked <span>{timeUpdate}</span>
        </S.CardUserInfoUpload>
        <S.CardUserLink to={AppRoutes.Blank}>
          <S.CardUserLinkText>{userName}</S.CardUserLinkText>
          <S.CardUserLinkImg />
        </S.CardUserLink>
      </S.CardUserInfo>
    </S.CardUserWrapper>
  );
};

export default QuestionCardUser;
