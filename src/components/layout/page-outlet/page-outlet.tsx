import { Outlet } from "react-router";
import FooterBlock from "../footer-block/footer-block";
import Header from "../header/header";

const PageOutlet = () => {
  return (
    <>
      <Header />
      <Outlet />
      <FooterBlock />
    </>
  );
};

export default PageOutlet;
