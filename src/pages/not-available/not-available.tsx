import { AppRoutes } from "utils/constants";
import * as S from "./not-available.style";

const NotAvailable = () => {
  return (
    <S.NotAvailableWrapper>
      <S.NotAvailablePic aria-hidden="true" />
      <div>
        <S.NotAvailableTitle>Page not found</S.NotAvailableTitle>
        <S.NotAvailableContent>
          We're sorry, we couldn't find the page you requested.
          <br />
          If you feel something is missing that should be here, contact us.
        </S.NotAvailableContent>
        <S.NotAvailableLink to={AppRoutes.BackOneLevel}>
          Click here to go back
        </S.NotAvailableLink>
      </div>
    </S.NotAvailableWrapper>
  );
};

export default NotAvailable;
