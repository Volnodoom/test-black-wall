import { useSelector } from "react-redux";
import Pagination from "components/pagination/pagination";
import QuestionCardUser from "components/question-card-user/question-card-user";
import TagList from "components/tag-list/tag-list";
import * as selector from "store/data-question-answer/data-question-answer.selector";
import * as S from "./question-card.style";
import { DATE_MULTIPLIER, LOCAL, TimeFormat } from "utils/constants";
import ContentLoading from "components/content-loading/content-loading";

const QuestionCard = () => {
  const questionResponse = useSelector(selector.getSingleQuestionResponse);
  const answerResponse = useSelector(selector.getAnswerResponse);

  if (!questionResponse) {
    return <ContentLoading />;
  }

  const calculateCreationDate = (date: number) =>
    new Date(date * DATE_MULTIPLIER).toLocaleString(LOCAL, TimeFormat);
  const modifDate = new Date(
    questionResponse.lastActivityDate * DATE_MULTIPLIER
  ).toLocaleString(LOCAL, TimeFormat);

  console.log(questionResponse.lastActivityDate);

  return (
    <S.CardWrapper>
      <S.CardInfoWrapper>
        <S.CardInfoTitle>{questionResponse.title}</S.CardInfoTitle>
        <S.CardInfoTime>
          <S.CardInfoTimeTitle>Asked</S.CardInfoTimeTitle>
          <S.CardInfoTimeData>
            {calculateCreationDate(questionResponse.creationDate)}
          </S.CardInfoTimeData>

          <S.CardInfoTimeTitle>Modified </S.CardInfoTimeTitle>
          <S.CardInfoTimeData>
            {questionResponse.lastActivityDate ? modifDate : "none"}
          </S.CardInfoTimeData>

          <S.CardInfoTimeTitle>Viewed</S.CardInfoTimeTitle>
          <S.CardInfoTimeData>{questionResponse.viewCount}</S.CardInfoTimeData>
        </S.CardInfoTime>
      </S.CardInfoWrapper>

      <S.CardContentWrapper>
        <div dangerouslySetInnerHTML={{ __html: questionResponse.body }}></div>

        <TagList tags={questionResponse.tags} />
        <QuestionCardUser
          userName={questionResponse.owner.displayName}
          timeUpdate={calculateCreationDate(questionResponse.creationDate)}
          srcUrl={questionResponse.owner.profileImage}
        />
      </S.CardContentWrapper>

      <S.CardAnswerTitle>
        {questionResponse.answerCount} Answers
      </S.CardAnswerTitle>

      {answerResponse ? (
        answerResponse.items.map((item) => (
          <S.CardContentWrapper
            $isComment
            key={`uniq-value-key-${item.answerId}`}
          >
            <div dangerouslySetInnerHTML={{ __html: item.body }}></div>

            <QuestionCardUser
              userName={item.owner.displayName}
              timeUpdate={calculateCreationDate(item.creationDate)}
              srcUrl={item.owner.profileImage}
            />
          </S.CardContentWrapper>
        ))
      ) : (
        <ContentLoading />
      )}

      {/* <Pagination totalPageNumber={2} /> */}
    </S.CardWrapper>
  );
};

export default QuestionCard;
