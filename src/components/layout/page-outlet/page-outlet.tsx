import { Outlet } from "react-router";
import { Footer } from "../footer/footer.style";
import Header from "../header/header";

const PageOutlet = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default PageOutlet;
