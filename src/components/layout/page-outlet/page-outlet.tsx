import { Outlet } from "react-router";
import FooterBlock from "../footer-block/footer-block";
import Header from "../header/header";
import * as S from "./page-outlet.style";

const PageOutlet = () => {
  return (
    <S.PageWrapper>
      <Header />
      <S.PageOutletWrapper>
        <Outlet />
      </S.PageOutletWrapper>
      <FooterBlock />
    </S.PageWrapper>
  );
};

export default PageOutlet;
