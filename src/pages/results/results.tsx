import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import TagList from "components/tag-list/tag-list";
import * as S from "./results.style";
import * as selector from "store/data-question-answer/data-question-answer.selector";
import { useEffect } from "react";
import { useAppDispatch } from "hooks/useAppDispatch";
import {
  fetchAllQuestions,
  fetchAnswers,
} from "store/data-question-answer/api-actions";
import Pagination from "components/pagination/pagination";
import { AllClientResponseTypes } from "types/store.type";
import { ALL_QUESTIONS, AppRoutes, ONE, PAGE_STEP } from "utils/constants";
import ContentLoading from "components/content-loading/content-loading";
import { addActiveRequest } from "store/data-question-answer/data-question-answer";

const Results = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const currentPage = useSelector(selector.getCurrentPage);
  const activeRequest = useSelector(selector.getActiveRequest);
  const allQuestions = useSelector(selector.getQuestionsResponse);

  useEffect(() => {
    if (activeRequest === ALL_QUESTIONS && allQuestions === null) {
      dispatch(fetchAllQuestions({}));
    }
  }, [dispatch, activeRequest, currentPage, allQuestions]);

  let generalData: AllClientResponseTypes = null;

  if (allQuestions) {
    generalData = allQuestions;
  }

  if (generalData === null) {
    return <ContentLoading />;
  }

  const { total } = generalData;
  const totalNumberOfPages = Math.ceil(total / PAGE_STEP);

  const handleRowClick = (idQuestion: string) => () => {
    if (typeof activeRequest === "string") {
      const activeUpdate = {
        requestStor: activeRequest,
        id: idQuestion,
      };
      dispatch(addActiveRequest(activeUpdate));
    }

    dispatch(fetchAnswers({ questionId: idQuestion }));
    navigate(AppRoutes.AbsoluteCard);
  };

  return (
    <S.ResultsWrapper>
      <S.ResultsTable>
        <caption className="visually-hidden">Search results</caption>
        <S.ResultTableHead>
          <S.ResultTableHeadRow>
            <S.HeadColumnFirst>Authors</S.HeadColumnFirst>
            <S.HeadColumnSecond>Topics</S.HeadColumnSecond>
            <S.HeadColumnThird>Replies</S.HeadColumnThird>
            <S.HeadColumnFourth>Tags</S.HeadColumnFourth>
          </S.ResultTableHeadRow>
        </S.ResultTableHead>

        <tbody>
          {generalData.items
            .slice((currentPage - ONE) * PAGE_STEP)
            .map((item) => (
              <S.DataRow
                key={item.questionId}
                onClick={handleRowClick(String(item.questionId))}
              >
                <S.DataColumn $width={200}>
                  {item.owner.displayName}
                </S.DataColumn>
                <S.DataColumn>{item.title}</S.DataColumn>
                <S.DataColumnThird $width={150}>
                  {item.answerCount}
                </S.DataColumnThird>
                <S.DataColumn>
                  <TagList tags={item.tags} />
                </S.DataColumn>
              </S.DataRow>
            ))}
        </tbody>
      </S.ResultsTable>

      {/* <Pagination totalPageNumber={totalNumberOfPages} /> */}
    </S.ResultsWrapper>
  );
};

export default Results;
