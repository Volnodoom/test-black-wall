import MainClients from "components/main-clients/main-clients";
import MainHeader from "components/main-header/main-header";
import { useAppDispatch } from "hooks/useAppDispatch";
import { useEffect } from "react";

const Main = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    // dispatch(fetchCustomSearch({ question: "react" }));
    // dispatch(fetchAllQuestions({}));
    // dispatch(fetchQuestionByUserTag({ userId: "2448918", tagName: "bash" }));
    // dispatch(fetchAnswers({ questionId: "17066250" }));
    // dispatch(fetchTags({}));
    // dispatch(fetchUserTags({ userId: "2448918" }));
    // dispatch(fetchCustomSearch({ question: "react" }));
  }, []);

  return (
    <>
      <MainHeader />
      <MainClients />
    </>
  );
};

export default Main;
