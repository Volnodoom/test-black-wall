import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ClientAnswerResponseType, ClientQuestionResponseType, ClientTagsResponseType, ClientUserTagsResponseType, QuestionAnswerStateType } from 'types/store.type';
import { LoadingStatus, NameSpace } from 'utils/constants';

const initialState: QuestionAnswerStateType = {
  requestQuestion: null,
  requestAnswer: null,
  requestTags: null,
  requestUserTags: null,
  activeRequest: null,
  loadingQuestionStatus: LoadingStatus.Idle,
  loadingAnswersStatus: LoadingStatus.Idle,
};

export const dataQuestionAnswer = createSlice({
  name: NameSpace.DataQuestionAnswer,
  initialState,
  reducers: {
    addQuestionRequest: (state, action: PayloadAction<{requestName: string, update: ClientQuestionResponseType}>) => {
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
        ...update,
      }
    },
    addAnswerRequest: (state, action: PayloadAction<{requestName: string, update: ClientAnswerResponseType}>) => {
      const requestName = action.payload.requestName;
      const update = action.payload.update;

      if(state.requestAnswer === null) {
        state.requestAnswer = {
          [requestName]: update,
        }

        return;
      }

      state.requestAnswer.requestName = {
        ...state.requestAnswer.requestName,
        ...update,
      }
    },
    addTagsRequest: (state, action: PayloadAction<{requestName: string, update: ClientTagsResponseType}>) => {
      const requestName = action.payload.requestName;
      const update = action.payload.update;

      if(state.requestTags === null) {
        state.requestTags = {
          [requestName]: update,
        }

        return;
      }

      state.requestTags.requestName = {
        ...state.requestTags.requestName,
        ...update,
      }
    },
    addUserTagsRequest: (state, action: PayloadAction<{requestName: string, update: ClientUserTagsResponseType}>) => {
      const requestName = action.payload.requestName;
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
    addActiveRequest: (state, action: PayloadAction<string>) => {
      state.activeRequest = action.payload;
    }
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(fetchAction.pending, (state) => {
  //       state.loadingQuestionStatus = LoadingStatus.Loading;
  //     })
  //     .addCase(fetchAction.fulfilled, (state) => {
  //       state.loadingQuestionStatus = LoadingStatus.Succeeded;
  //     })
  //     .addCase(fetchAction.rejected, (state) => {
  //       state.loadingQuestionStatus = LoadingStatus.Failed;
  //     })
  //     .addCase(fetchAction.pending, (state) => {
  //       state.loadingAnswersStatus = LoadingStatus.Loading;
  //     })
  //     .addCase(fetchAction.fulfilled, (state) => {
  //       state.loadingAnswersStatus = LoadingStatus.Succeeded;
  //     })
  //     .addCase(fetchAction.rejected, (state) => {
  //       state.loadingAnswersStatus = LoadingStatus.Failed;
  //     });
  // }
});

export const {
  addQuestionRequest,
  addAnswerRequest,
  addTagsRequest,
  addUserTagsRequest,
  addActiveRequest,
} = dataQuestionAnswer.actions;
