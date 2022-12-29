export const REQUEST_TIMEOUT = 5000;
export const ONE = 1;
export const TWO = 2;
export const THREE = 3;
export const PAGE_STEP = 30;
export const DATE_MULTIPLIER = 1000;
export const UNIQ_KEY = 'HCymz6WGVkPQ8)VINhWHzA((';
export const BACKEND_URL = 'https://api.stackexchange.com/';
export const FILTER_QUESTION_API_VALUE = '!XZp2NhVcXBiDo0o(zMoCB7_gNsiE.1w3OUHBYkfRtA';
export const FILTER_ANSWER_API_VALUE = '!8.X7X4_Bf5QZnoyshTf6IQZAaezx(6DH1RqBm';
export const FILTER_TAGS_API_VALUE = '!.KBELfb(W92ZXNO09z(nKV1On1pOv';
export const FILTER_TOP_USER_TAGS_API_VALUE = '!-xFeQd*12TC*D9ag5TrrfOq6';
export const ALL_QUESTIONS = 'ALL QUESTIONS';
export const ALL_TAGS = 'ALL_TAGS';
export const LOCAL = 'ru-RU';
export const TAG = 'TAG';

export const TimeFormat = {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
} as const ;

export const AppRoutes = {
  Root: '/',
  Result: 'result/*',
  Card: 'card/*',
  Blank: 'blank',
  Rest: '*',
  BackOneLevel: '..',
  AbsoluteCard: '/card/*',
  AbsoluteResult: '/result/*',
} as const;

export const APIRoutes = {
  Search: (question: string | number, page: number = ONE) => `search/advanced?key=${UNIQ_KEY}&page=${page}&order=desc&sort=activity&q=${question}&filter=${FILTER_QUESTION_API_VALUE}&site=stackoverflow`,
  Answers: (questionId: number, page: number = ONE) => `questions/${questionId}/answers?key=${UNIQ_KEY}&page=${page}&order=desc&sort=activity&filter=${FILTER_ANSWER_API_VALUE}&site=stackoverflow`,
  AllQuestions: (page: number = ONE) => `questions?key=${UNIQ_KEY}&page=${page}&order=desc&sort=activity&filter=${FILTER_QUESTION_API_VALUE}&site=stackoverflow`,
  AllTags: (page: number = ONE) => `tags?key=${UNIQ_KEY}&page=${page}&order=desc&sort=popular&site=stackoverflow&filter=${FILTER_TAGS_API_VALUE}`,
  UserTopTags: (userId: number, page: number = ONE) => `users/${userId}/top-tags?key=${UNIQ_KEY}&page=${page}&site=stackoverflow&filter=${FILTER_TOP_USER_TAGS_API_VALUE}`,
  UserTopQuestionsByTag: (userId: number, tagName: string, page: number = ONE) => `users/${userId}/tags/${tagName}/top-questions?key=${UNIQ_KEY}&page=${page}&order=desc&sort=activity&site=stackoverflow&filter=${FILTER_QUESTION_API_VALUE}`,
} as const;

export enum APIAction {
  FetchSearch = 'questions/fetchCustomSearch',
  FetchQuestions = 'questions/fetchAll',
  FetchAnswers = 'answer/fetch',
  FetchTags = 'tags/fetch',
  FetchUserTopTags = 'user/fetchTags',
  FetchUserQuestionsByTags = 'user/fetchQuestionsByTags',
}

export enum LoadingStatus {
  Idle = 'idle',
  Loading = 'loading',
  Succeeded = 'succeeded',
  Failed = 'failed',
};

export enum NameSpace {
  DataQuestionAnswer = 'DATA_QUESTION_ANSWER',
};
