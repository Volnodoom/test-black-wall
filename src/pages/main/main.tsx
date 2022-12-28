import MainClients from "components/main-clients/main-clients";
import MainHeader from "components/main-header/main-header";
import { useEffect } from "react";
import { APIRoutes, BACKEND_URL } from "utils/constants";

const Main = () => {
  useEffect(() => {
    const asyncFetch = async () => {
      const url = BACKEND_URL + APIRoutes.UserTopTags(2448918);
      console.log(url);
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
    };

    // asyncFetch();
  }, []);

  return (
    <>
      <MainHeader />
      <MainClients />
    </>
  );
};

export default Main;
