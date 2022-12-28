
export type PageRequest = { page?: number };

export type FetchSearch = PageRequest & {
  question: string | number,
}

export type FetchQuestionByUserTag = PageRequest & {
  userId: string,
  tagName: string,
}

export type FetchAnswerType = PageRequest & {
  questionId: string,
}

export type FetchUserTags = PageRequest & {
  userId: string,
}

// export const APIRoutes = {
//   Search: (question: string | number, page: number = ONE) => `search/advanced?key=${UNIQ_KEY}&page=${page}&order=desc&sort=activity&q=${question}&filter=${FILTER_QUESTION_API_VALUE}&site=stackoverflow`,
//   Answers: (questionId: number, page: number = ONE) => `questions/${questionId}/answers?key=${UNIQ_KEY}&page=${page}&order=desc&sort=activity&filter=${FILTER_ANSWER_API_VALUE}&site=stackoverflow`,
//   AllQuestions: (page: number = ONE) => `questions?key=${UNIQ_KEY}&page=${page}&order=desc&sort=activity&filter=${FILTER_QUESTION_API_VALUE}&site=stackoverflow`,
//   AllTags: (page: number = ONE) => `tags?key=${UNIQ_KEY}&page=${page}&order=desc&sort=popular&site=stackoverflow&filter=${FILTER_TAGS_API_VALUE}`,
//   UserTopTags: (userId: number, page: number = ONE) => `users/${userId}/top-tags?key=${UNIQ_KEY}&page=${page}&site=stackoverflow&filter=${FILTER_TOP_USER_TAGS_API_VALUE}`,
//   UserTopQuestionsByTag: (userId: number, tagName: string, page: number = ONE) => `users/${userId}/tags/${tagName}/top-questions?key=${UNIQ_KEY}&page=${page}&order=desc&sort=activity&site=stackoverflow&filter=${FILTER_QUESTION_API_VALUE}`,
// } as const;
