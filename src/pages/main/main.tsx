import MainClients from "components/main-clients/main-clients";
import MainHeader from "components/main-header/main-header";
import * as S from "./main.style";

const Main = () => {
  return (
    <S.MainPage>
      <MainHeader />
      <MainClients />
    </S.MainPage>
  );
};

export default Main;
