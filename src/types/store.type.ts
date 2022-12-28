import { AxiosInstance } from 'axios';
import { store } from "store";
import { LoadingStatus } from "utils/constants";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type GeneralApiConfig = {
  dispatch: AppDispatch,
  state: RootState,
  extra: AxiosInstance,
};

export type ServerOwnerType = {
  'display_name': string,
  'profile_image': string,
  'user_id': number,
}

export type ClientOwnerType = {
  displayName: string,
  profileImage: string,
  userId: number,
}

export type ServerQuestionDataType = {
  'answer_count': number,
  body: string,
  'creation_date': number,
  'last_activity_date': number,
  'question_id': number,
  'post_state': string,
  tags: string[],
  title: string,
  'view_count': number,
  owner: ServerOwnerType,
};

export type ClientQuestionDataType = {
  answerCount: number,
  body: string,
  creationDate: number,
  lastActivityDate: number,
  questionId: number,
  tags: string[],
  title: string,
  viewCount: number,
  owner: ClientOwnerType,
};

export type ServerResponseBaseType = {
  page: number,
  total: number,
  'quota_remaining': number,
}

export type ServerQuestionResponseType = ServerResponseBaseType & {
  items: ServerQuestionDataType[],
};

export type ClientResponseBaseType = {
  page: number,
  total: number,
}

export type ClientQuestionResponseType = ClientResponseBaseType & {
  items: ClientQuestionDataType[],
};

export type ServerAnswerDataType = {
  'answer_id': number,
  body: string,
  creation_date: number,
  owner: ServerOwnerType,
}

export type ClientAnswerDataType = {
  answerId: number,
  body: string,
  creation_date: number,
  owner: ClientOwnerType,
}

export type ServerAnswerResponseType = ServerResponseBaseType & {
  items: ServerAnswerDataType[],
}

export type ClientAnswerResponseType = ClientResponseBaseType & {
  items: ClientAnswerDataType[],
}

export type ServerTagsDataType = {
  count: number,
  'last_activity_date': number,
  name: string,
}

export type ClientTagsDataType = {
  count: number,
  lastActivityDate: number,
  name: string,
}

export type ServerTagsResponseType = ServerResponseBaseType & {
  items: ServerTagsDataType[],
}

export type ClientTagsResponseType = ClientResponseBaseType & {
  items: ClientTagsDataType[],
}

export type ServerUserTagsDataType = {
  'answer_count': number,
  'tag_name': string,
  'user_id': number,
}

export type ClientUserTagsDataType = {
  answerCount: number,
  tagName: string,
  userId: number,
}

export type ServerUserTagsResponseType = ServerResponseBaseType & {
  items: ServerUserTagsDataType[],
}

export type ClientUserTagsResponseType = ClientResponseBaseType & {
  items: ClientUserTagsDataType[],
}

export type QuestionAnswerStateType = {
  requestQuestion: {
    [x: string]: ClientQuestionResponseType,
  } | null,
  requestAnswer: {
    [x: string]: ClientAnswerResponseType,
  } | null,
  requestTags: {
    [x: string]: ClientTagsResponseType,
  } | null,
  requestUserTags: {
    [x: string]: ClientUserTagsResponseType,
  } | null,
  activeRequest: string | null,
  loadingQuestionStatus: LoadingStatus,
  loadingAnswersStatus: LoadingStatus,
}
