import Header from "components/layout/header/header";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "themes/default-theme";
import * as S from "./app.style";

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <S.GlobalStyle />
      <Header />
    </ThemeProvider>
  )
}

export default App;
