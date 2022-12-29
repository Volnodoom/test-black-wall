import { ClientAnswerDataType, ClientAnswerResponseType, ClientOwnerType, ClientQuestionDataType, ClientQuestionResponseType, ClientTagsDataType, ClientTagsResponseType, ClientUserTagsDataType, ClientUserTagsResponseType, ServerAnswerDataType, ServerAnswerResponseType, ServerOwnerType, ServerQuestionDataType, ServerQuestionResponseType, ServerTagsDataType, ServerTagsResponseType, ServerUserTagsDataType, ServerUserTagsResponseType } from "types/store.type";

const adaptOwner = (subject: ServerOwnerType): ClientOwnerType => ({
  displayName: subject['display_name'],
  profileImage: subject['profile_image'],
  userId: subject['user_id'],
});

const adaptQuestion = (subject: ServerQuestionDataType): ClientQuestionDataType => ({
  answerCount:  subject['answer_count'],
  body: subject.body,
  creationDate: subject['creation_date'],
  lastActivityDate: subject['last_activity_date'],
  questionId: subject['question_id'],
  tags: subject.tags,
  title: subject.title,
  viewCount: subject['view_count'],
  owner: adaptOwner(subject.owner),
});

const adaptAnswer = (subject: ServerAnswerDataType): ClientAnswerDataType => ({
  answerId: subject['answer_id'],
  body: subject.body,
  creationDate: subject['creation_date'],
  owner: adaptOwner(subject.owner),
});

const adaptTags = (subject: ServerTagsDataType): ClientTagsDataType => ({
  count: subject.count,
  lastActivityDate: subject['last_activity_date'],
  name: subject.name,
});

const adaptUserTags = (subject: ServerUserTagsDataType): ClientUserTagsDataType => ({
  answerCount: subject['answer_count'],
  tagName: subject['tag_name'],
  userId: subject['user_id'],
});

export const adaptQuestionResponse = (subject: ServerQuestionResponseType): ClientQuestionResponseType => ({
  page: subject.page,
  total: subject.total,
  items: subject.items.map((item) => adaptQuestion(item)),
});

export const adaptAnswerResponse = (subject: ServerAnswerResponseType): ClientAnswerResponseType => ({
  page: subject.page,
  total: subject.total,
  items: subject.items.map((item) => adaptAnswer(item)),
});

export const adaptTagsResponse = (subject: ServerTagsResponseType): ClientTagsResponseType => ({
  page: subject.page,
  total: subject.total,
  items: subject.items.map((item) => adaptTags(item)),
});

export const adaptUserTagsResponse = (subject: ServerUserTagsResponseType): ClientUserTagsResponseType => ({
  page: subject.page,
  total: subject.total,
  items: subject.items.map((item) => adaptUserTags(item)),
});
