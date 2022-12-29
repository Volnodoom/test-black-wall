import PageOutlet from "components/layout/page-outlet/page-outlet";
import Blank from "pages/blank/blank";
import Main from "pages/main/main";
import NotAvailable from "pages/not-available/not-available";
import QuestionCard from "pages/question-card/question-card";
import Results from "pages/results/results";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "themes/default-theme";
import { AppRoutes } from "utils/constants";
import * as S from "./app.style";

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <S.GlobalStyle />

      <Routes>
        <Route path={AppRoutes.Root} element={<PageOutlet />}>
          <Route index element={<Main />} />
          <Route path={AppRoutes.Result} element={<Results />} />
          <Route path={AppRoutes.Card} element={<QuestionCard />} />
          <Route path={AppRoutes.Blank} element={<Blank />} />
          <Route path={AppRoutes.Rest} element={<NotAvailable />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};

export default App;
