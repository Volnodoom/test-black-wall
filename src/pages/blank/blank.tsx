import { AppRoutes } from "utils/constants";
import * as S from "./blank.style";

const Blank = () => {
  return (
    <S.BlankWrapping>
      <S.BlankText>
        This is an empty page for routing as a result of LINK (anchor) click.
      </S.BlankText>
      <S.BlankLink to={AppRoutes.BackOneLevel}>
        Click here to go back
      </S.BlankLink>
    </S.BlankWrapping>
  );
};

export default Blank;
