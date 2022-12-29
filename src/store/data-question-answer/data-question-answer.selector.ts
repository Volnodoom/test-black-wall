import { createSelector } from 'reselect';
import { ActiveRequestType, RootState } from "types/store.type";
import { NameSpace } from "utils/constants";

export const getActiveRequest = (state: RootState) => state[NameSpace.DataQuestionAnswer].activeRequest;
export const getCurrentPage = (state: RootState) => state[NameSpace.DataQuestionAnswer].currentPage;

export const getQuestionsResponse = createSelector(
  getActiveRequest,
  (state: RootState) => state[NameSpace.DataQuestionAnswer].requestQuestion,
  (activeRequest, questionsResponse) => {
    if(typeof activeRequest === 'string') {
      const response = questionsResponse && questionsResponse[activeRequest];

      if(response) {
        return response;
      }

      return null;
    }
  }
)

export const getSingleQuestionResponse = createSelector(
  getActiveRequest,
  (state: RootState) => state[NameSpace.DataQuestionAnswer].requestQuestion,
  (activeRequest, questionsResponse) => {
    const {requestStor, id} = activeRequest as ActiveRequestType;
    const response = questionsResponse && questionsResponse[requestStor];

    if(response) {
      const singleItem = response.items.find((item) => item.questionId === Number(id));
      return singleItem ? singleItem : null;
    }
    return null;
  }
)

export const getAnswerResponse = createSelector(
  getActiveRequest,
  (state: RootState) => state[NameSpace.DataQuestionAnswer].requestAnswer,
  (activeRequest, answersResponse) => {
    if(answersResponse && answersResponse[(activeRequest as ActiveRequestType).id]) {
      return answersResponse[(activeRequest as ActiveRequestType).id];
    }
    return null;
  }
);

export const getLoadingQuestionStatus = (state: RootState) => state[NameSpace.DataQuestionAnswer].loadingQuestionStatus;
export const getLoadingSearchStatus = (state: RootState) => state[NameSpace.DataQuestionAnswer].loadingSearchStatus;
export const getLoadingAnswersStatus = (state: RootState) => state[NameSpace.DataQuestionAnswer].loadingAnswersStatus;
export const getLoadingTagStatus = (state: RootState) => state[NameSpace.DataQuestionAnswer].loadingTagStatus;
export const getLoadingUserTagsStatus = (state: RootState) => state[NameSpace.DataQuestionAnswer].loadingUserTagsStatus;
export const getLoadingQuestionByTagsStatus = (state: RootState) => state[NameSpace.DataQuestionAnswer].loadingQuestionByTagsStatus;
