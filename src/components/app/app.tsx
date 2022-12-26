import PageOutlet from "components/layout/page-outlet/page-outlet";
import Main from "pages/main/main";
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
        </Route>
      </Routes>
    </ThemeProvider>
  );
};

export default App;
