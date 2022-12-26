import Main from "pages/main/main";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "themes/default-theme";
import * as S from "./app.style";

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <S.GlobalStyle />
      <Main />
    </ThemeProvider>
  );
};

export default App;
