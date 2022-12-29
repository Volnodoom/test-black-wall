import { useAppDispatch } from "hooks/useAppDispatch";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { fetchAllQuestions } from "store/data-question-answer/api-actions";
import { updateCurrentPage } from "store/data-question-answer/data-question-answer";
import * as selector from "store/data-question-answer/data-question-answer.selector";
import { ALL_QUESTIONS, ONE, THREE, TWO } from "utils/constants";
import * as S from "./pagination.style";

type PaginationType = {
  totalPageNumber: number;
};

const Pagination = ({ totalPageNumber }: PaginationType) => {
  const dispatch = useAppDispatch();

  const [isPreviousButtonHidden, setIsPreviousButtonHidden] = useState(true);
  const [isNextButtonHidden, setIsNextButtonHidden] = useState(true);
  const [leftSliceBorder, setLeftSliceBorder] = useState(0);
  const [rightSliceBorder, setRightSliceBorder] = useState(THREE);

  const activeRequest = useSelector(selector.getActiveRequest);
  const currentPage = useSelector(selector.getCurrentPage);

  const conditionsForFetch = (pageValue: number) => {
    if (activeRequest === ALL_QUESTIONS) {
      dispatch(fetchAllQuestions({ page: pageValue }));
      dispatch(updateCurrentPage(pageValue));
    }
  };

  const arrayFromPageNumbers = Array.from(
    { length: totalPageNumber },
    (value, index) => ++index
  );

  const nextPage = currentPage + ONE;
  const previousPage = currentPage - ONE;

  useEffect(() => {
    if (totalPageNumber <= THREE) {
      setIsPreviousButtonHidden(true);
      setIsNextButtonHidden(true);
      setLeftSliceBorder(0);
      setRightSliceBorder(THREE);
    }

    if (totalPageNumber > THREE) {
      setIsNextButtonHidden(false);
    }

    if (totalPageNumber > THREE && currentPage > ONE) {
      setIsPreviousButtonHidden(false);
      setIsNextButtonHidden(false);
    }

    if (currentPage === totalPageNumber) {
      setIsNextButtonHidden(true);
    }

    if (currentPage === ONE) {
      setIsPreviousButtonHidden(true);
    }
  }, [currentPage, totalPageNumber]);

  const handlePreviousClick = () => {
    conditionsForFetch(previousPage);

    setLeftSliceBorder(currentPage - TWO);
  };

  const handleNextClick = () => {
    conditionsForFetch(nextPage);

    setRightSliceBorder(currentPage + THREE);
  };

  const handleLinkClick = (value: number) => () => {
    conditionsForFetch(value);

    if (value > TWO) {
      setLeftSliceBorder(value - TWO);
    }
  };

  return (
    <S.PaginationWrapper>
      <S.PaginationItem
        $isHidden={isPreviousButtonHidden}
        $hasBigSize
        to={String(previousPage)}
        onClick={handlePreviousClick}
      >
        Previous
      </S.PaginationItem>
      {arrayFromPageNumbers
        .slice(leftSliceBorder, rightSliceBorder)
        .map((value) => (
          <S.PaginationItem
            $isSelected={currentPage === value}
            $hasBigSize
            to={String(value)}
            onClick={handleLinkClick(value)}
            key={`something-${value}`}
          >
            {value}
          </S.PaginationItem>
        ))}
      <S.PaginationItem
        $isHidden={isNextButtonHidden}
        $hasBigSize
        to={String(nextPage)}
        onClick={handleNextClick}
      >
        Next
      </S.PaginationItem>
    </S.PaginationWrapper>
  );
};

export default Pagination;
