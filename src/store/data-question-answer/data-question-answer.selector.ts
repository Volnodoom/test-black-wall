import { RootState } from "types/store.type";
import { NameSpace } from "utils/constants";

export const getActiveStatus = (state: RootState) => state[NameSpace.DataQuestionAnswer].activeRequest;
export const getLoadingQuestionStatus = (state: RootState) => state[NameSpace.DataQuestionAnswer].loadingQuestionStatus;
export const getLoadingAnswersStatus = (state: RootState) => state[NameSpace.DataQuestionAnswer].loadingAnswersStatus;
