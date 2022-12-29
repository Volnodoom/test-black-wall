import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from 'utils/constants';
import { dataQuestionAnswer } from './data-question-answer/data-question-answer';


export const reducerRoot = combineReducers({
  [NameSpace.DataQuestionAnswer]: dataQuestionAnswer.reducer,
});
