import { Li } from "components/styled";
import { useAppDispatch } from "hooks/useAppDispatch";
import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router";
import { addActiveRequest } from "store/data-question-answer/data-question-answer";
import { ALL_QUESTIONS, ALL_TAGS, AppRoutes, TAG } from "utils/constants";
import * as S from "./header.style";

const Header = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [currentValue, setCurrentValue] = useState("");

  const handleInputChange = (evt: ChangeEvent) => {
    const inputValue = (evt.target as HTMLInputElement).value;
    setCurrentValue(inputValue);
  };

  const handleOnSubmit = () => {
    if (currentValue === "") {
      dispatch(addActiveRequest(ALL_QUESTIONS));
    }

    if (currentValue === TAG) {
      dispatch(addActiveRequest(ALL_TAGS));
    }

    navigate(AppRoutes.AbsoluteResult);
    return;
  };

  return (
    <S.HeaderStyle>
      <S.HeaderWrapper>
        <S.HeaderMenuButton aria-label="menu" type="button">
          <S.HeaderMenuDecor aria-hidden="true" />
        </S.HeaderMenuButton>

        <S.HeaderLogo to={AppRoutes.Root}>
          <S.HeaderLogoIcon aria-hidden="true" />
          <S.HeaderLogoText aria-hidden="true" />
        </S.HeaderLogo>

        <nav>
          <S.HeaderNavList>
            <Li>
              <S.HeaderNavLinkItem to={AppRoutes.Blank}>
                About
              </S.HeaderNavLinkItem>
            </Li>

            <Li>
              <S.HeaderNavLinkItem to={AppRoutes.Blank}>
                Products
              </S.HeaderNavLinkItem>
            </Li>

            <Li>
              <S.HeaderNavLinkItem to={AppRoutes.Blank}>
                For teams
              </S.HeaderNavLinkItem>
            </Li>
          </S.HeaderNavList>
        </nav>

        <S.HeaderForm onSubmit={handleOnSubmit}>
          <S.HederFormDecoration />
          <S.HeaderFormInput
            type="text"
            placeholder="Search..."
            maxLength={240}
            autoComplete="off"
            onChange={handleInputChange}
          />
        </S.HeaderForm>

        <S.HeaderAuthorizationList>
          <Li>
            <S.HeaderAuthorizationLogIn to={AppRoutes.Blank}>
              Log in
            </S.HeaderAuthorizationLogIn>
          </Li>

          <Li>
            <S.HeaderAuthorizationSignUp to={AppRoutes.Blank}>
              Sign up
            </S.HeaderAuthorizationSignUp>
          </Li>
        </S.HeaderAuthorizationList>
      </S.HeaderWrapper>
    </S.HeaderStyle>
  );
};

export default Header;
