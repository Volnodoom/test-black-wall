import Footer from "components/layout/footer/footer";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "themes/default-theme";
import * as S from "./app.style";

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <S.GlobalStyle />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
