import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AddQuestionsByUserTagsType, ClientAnswerResponseType, ClientQuestionResponseType, ClientTagsResponseType, ClientUserTagsResponseType, QuestionAnswerStateType } from 'types/store.type';
import { LoadingStatus, NameSpace } from 'utils/constants';
import { fetchAllQuestions, fetchAnswers, fetchCustomSearch, fetchQuestionByUserTag, fetchTags, fetchUserTags } from './api-actions';

const initialState: QuestionAnswerStateType = {
  requestQuestion: null,
  requestAnswer: null,
  requestTags: null,
  requestUserTags: null,
  requestQuestionUserTags: null,
  activeRequest: null,
  loadingQuestionStatus: LoadingStatus.Idle,
  loadingSearchStatus: LoadingStatus.Idle,
  loadingAnswersStatus: LoadingStatus.Idle,
  loadingTagStatus: LoadingStatus.Idle,
  loadingUserTagsStatus: LoadingStatus.Idle,
  loadingQuestionByTagsStatus: LoadingStatus.Idle,
};

export const dataQuestionAnswer = createSlice({
  name: NameSpace.DataQuestionAnswer,
  initialState,
  reducers: {
    addQuestionRequest: (state, action: PayloadAction<{requestName: string | number, update: ClientQuestionResponseType}>) => {
      const requestName = action.payload.requestName;
      const update = action.payload.update;

      if(state.requestQuestion === null) {
        state.requestQuestion = {
          [requestName]: update,
        }

        return;
      }

      state.requestQuestion.requestName = {
        ...state.requestQuestion.requestName,
        page: update.page,
        total: update.total,
        items: {
          ...state.requestQuestion.requestName.items,
          ...update.items,
        }
      }
    },
    addAnswerRequest: (state, action: PayloadAction<{questionId: string, update: ClientAnswerResponseType}>) => {
      const requestName = action.payload.questionId;
      const update = action.payload.update;

      if(state.requestAnswer === null) {
        state.requestAnswer = {
          [requestName]: update,
        }

        return;
      }

      state.requestAnswer.requestName = {
        ...state.requestAnswer.requestName,
        page: update.page,
        total: update.total,
        items: {
          ...state.requestAnswer.requestName.items,
          ...update.items,
        }
      }
    },
    addTagsRequest: (state, action: PayloadAction<{update: ClientTagsResponseType}>) => {
      const update = action.payload.update;

      if(state.requestTags === null) {
        state.requestTags = {
          ...update,
        }

        return;
      }

      state.requestTags = {
        ...state.requestTags,
        page: update.page,
        total: update.total,
        items: {
          ...state.requestTags.items,
          ...update.items,
        }
      }
    },
    addUserTagsRequest: (state, action: PayloadAction<{userId: string, update: ClientUserTagsResponseType}>) => {
      const requestName = action.payload.userId;
      const update = action.payload.update;

      if(state.requestUserTags === null) {
        state.requestUserTags = {
          [requestName]: update,
        }
        return;
      }

      state.requestUserTags.requestName = {
        ...state.requestUserTags.requestName,
        ...update,
      }
    },
    addQuestionsByUserTagsRequest: (state, action: PayloadAction<AddQuestionsByUserTagsType>) => {
      const userId = action.payload.userId;
      const tag = action.payload.tag;
      const questions = action.payload.questions;

      const isQuestionIdInStore = (value: string): boolean => Boolean(state.requestQuestionUserTags?.userId?.normalizedQuestions[value]);

      const normalizedData = questions
        .map((question) => ({[question.questionId]: question.dataItem}))
        .reduce((prevValue, currentValue) => ({...prevValue, ...currentValue}), {});

      if(state.requestQuestionUserTags === null) {
        state.requestQuestionUserTags = {
          [userId]: {
            selectedTags: [tag],
            normalizedQuestions: {
              ...normalizedData,
            }
          },
        }
        return;
      }

      const uniqSelectedTags = new Set<string>();
      if(state.requestQuestionUserTags !== null) {
        state.requestQuestionUserTags
          .userId
          .selectedTags
          .slice()
          .forEach((tag) => uniqSelectedTags.add(tag));

        uniqSelectedTags.add(tag);
      }

      questions.forEach((question) => {

        if(
          state.requestQuestionUserTags !== null
          &&
          state.requestQuestionUserTags.userId
          &&
          !isQuestionIdInStore(question.questionId)
          ) {
          state.requestQuestionUserTags.userId = {
            ...state.requestQuestionUserTags.userId,
            selectedTags: Array.from(uniqSelectedTags),
            normalizedQuestions: {
              ...state.requestQuestionUserTags.userId.normalizedQuestions,
              [question.questionId]: question.dataItem,
            }
          }
        } else if(
          state.requestQuestionUserTags !== null
          &&
          state.requestQuestionUserTags.userId
          &&
          isQuestionIdInStore(question.questionId)
        ) {
          state.requestQuestionUserTags.userId = {
            ...state.requestQuestionUserTags.userId,
            selectedTags: Array.from(uniqSelectedTags),
            normalizedQuestions: {
              ...state.requestQuestionUserTags.userId.normalizedQuestions,
              [question.questionId]: {
                ...state.requestQuestionUserTags.userId.normalizedQuestions[question.questionId],
                ...question.dataItem,
              },
            }
          }
        } else {
          throw new Error ('Unknown condition in addQuestionsByUserTagsRequest');
        }

      })

    },
    addActiveRequest: (state, action: PayloadAction<string>) => {
      state.activeRequest = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllQuestions.pending, (state) => {
        state.loadingQuestionStatus = LoadingStatus.Loading;
      })
      .addCase(fetchAllQuestions.fulfilled, (state) => {
        state.loadingQuestionStatus = LoadingStatus.Succeeded;
      })
      .addCase(fetchAllQuestions.rejected, (state) => {
        state.loadingQuestionStatus = LoadingStatus.Failed;
      })

      .addCase(fetchCustomSearch.pending, (state) => {
        state.loadingSearchStatus = LoadingStatus.Loading;
      })
      .addCase(fetchCustomSearch.fulfilled, (state) => {
        state.loadingSearchStatus = LoadingStatus.Succeeded;
      })
      .addCase(fetchCustomSearch.rejected, (state) => {
        state.loadingSearchStatus = LoadingStatus.Failed;
      })

      .addCase(fetchAnswers.pending, (state) => {
        state.loadingAnswersStatus = LoadingStatus.Loading;
      })
      .addCase(fetchAnswers.fulfilled, (state) => {
        state.loadingAnswersStatus = LoadingStatus.Succeeded;
      })
      .addCase(fetchAnswers.rejected, (state) => {
        state.loadingAnswersStatus = LoadingStatus.Failed;
      })

      .addCase(fetchTags.pending, (state) => {
        state.loadingTagStatus = LoadingStatus.Loading;
      })
      .addCase(fetchTags.fulfilled, (state) => {
        state.loadingTagStatus = LoadingStatus.Succeeded;
      })
      .addCase(fetchTags.rejected, (state) => {
        state.loadingTagStatus = LoadingStatus.Failed;
      })

      .addCase(fetchUserTags.pending, (state) => {
        state.loadingUserTagsStatus = LoadingStatus.Loading;
      })
      .addCase(fetchUserTags.fulfilled, (state) => {
        state.loadingUserTagsStatus = LoadingStatus.Succeeded;
      })
      .addCase(fetchUserTags.rejected, (state) => {
        state.loadingUserTagsStatus = LoadingStatus.Failed;
      })

      .addCase(fetchQuestionByUserTag.pending, (state) => {
        state.loadingQuestionByTagsStatus = LoadingStatus.Loading;
      })
      .addCase(fetchQuestionByUserTag.fulfilled, (state) => {
        state.loadingQuestionByTagsStatus = LoadingStatus.Succeeded;
      })
      .addCase(fetchQuestionByUserTag.rejected, (state) => {
        state.loadingQuestionByTagsStatus = LoadingStatus.Failed;
      });
  }
});

export const {
  addQuestionRequest,
  addAnswerRequest,
  addTagsRequest,
  addUserTagsRequest,
  addQuestionsByUserTagsRequest,
  addActiveRequest,
} = dataQuestionAnswer.actions;
