
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
