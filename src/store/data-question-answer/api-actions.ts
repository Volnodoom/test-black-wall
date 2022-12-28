import { createAsyncThunk} from '@reduxjs/toolkit';
import { FetchAnswerType, FetchQuestionByUserTag, FetchSearch, FetchUserTags, PageRequest } from 'types/fetch.types';
import { AddQuestionsByUserTagsType, GeneralApiConfig, ServerAnswerResponseType, ServerQuestionResponseType, ServerTagsResponseType, ServerUserTagsResponseType } from 'types/store.type';
import { ALL_QUESTIONS, APIAction, APIRoutes } from 'utils/constants';
import { adaptAnswerResponse, adaptQuestionResponse, adaptTagsResponse, adaptUserTagsResponse } from 'utils/utils';
import { addAnswerRequest, addQuestionRequest, addQuestionsByUserTagsRequest, addTagsRequest, addUserTagsRequest } from './data-question-answer';


export const fetchCustomSearch = createAsyncThunk<void, FetchSearch, GeneralApiConfig>(
  APIAction.FetchSearch,
  async ({question, page}, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<ServerQuestionResponseType>(APIRoutes.Search(question, page));
      const storeUpdate = {
        requestName: question,
        update: adaptQuestionResponse(data),
      };

      dispatch(addQuestionRequest(storeUpdate));
    } catch (error) {
      throw error;
    }
  }
)

export const fetchAllQuestions = createAsyncThunk<void, PageRequest, GeneralApiConfig>(
  APIAction.FetchQuestions,
  async ({page}, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<ServerQuestionResponseType>(APIRoutes.AllQuestions(page));
      const storeUpdate = {
        requestName: ALL_QUESTIONS,
        update: adaptQuestionResponse(data),
      };

      dispatch(addQuestionRequest(storeUpdate));
    } catch (error) {
      throw error;
    }
  }
)

export const fetchQuestionByUserTag = createAsyncThunk<void, FetchQuestionByUserTag, GeneralApiConfig>(
  APIAction.FetchUserQuestionsByTags,
  async ({userId, tagName, page}, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<ServerQuestionResponseType>(APIRoutes.UserTopQuestionsByTag(Number(userId), tagName, page));

      const adaptedData = adaptQuestionResponse(data);

      const storeUpdate: AddQuestionsByUserTagsType = {
        userId,
        tag: tagName,
        questions: adaptedData.items.map((question) => ({questionId: String(question.questionId), dataItem: question})),
      };

      dispatch(addQuestionsByUserTagsRequest(storeUpdate));
    } catch (error) {
      throw error;
    }
  }
)

export const fetchAnswers = createAsyncThunk<void, FetchAnswerType, GeneralApiConfig>(
  APIAction.FetchAnswers,
  async ({questionId, page}, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<ServerAnswerResponseType>(APIRoutes.Answers(Number(questionId), page));
      const storeUpdate = {
        questionId,
        update: adaptAnswerResponse(data),
      };

      dispatch(addAnswerRequest(storeUpdate));
    } catch (error) {
      throw error;
    }
  }
)

export const fetchTags = createAsyncThunk<void, PageRequest, GeneralApiConfig>(
  APIAction.FetchTags,
  async ({page}, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<ServerTagsResponseType>(APIRoutes.AllTags(page));
      const storeUpdate = {
        update: adaptTagsResponse(data),
      };

      dispatch(addTagsRequest(storeUpdate));
    } catch (error) {
      throw error;
    }
  }
)

export const fetchUserTags = createAsyncThunk<void, FetchUserTags, GeneralApiConfig>(
  APIAction.FetchUserTopTags,
  async ({userId, page}, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<ServerUserTagsResponseType>(APIRoutes.UserTopTags(Number(userId), page));
      const storeUpdate = {
        userId,
        update: adaptUserTagsResponse(data),
      };

      dispatch(addUserTagsRequest(storeUpdate));
    } catch (error) {
      throw error;
    }
  }
)
