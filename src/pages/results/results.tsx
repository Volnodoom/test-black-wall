import { Li } from "components/styled";
import * as S from "./results.style";

const Results = () => {
  return (
    <S.ResultsWrapper>
      <S.ResultsTable>
        <caption className="visually-hidden">Search results</caption>
        <S.ResultTableHead>
          <S.ResultTableHeadRow>
            <S.HeadColumnFirst>Authors</S.HeadColumnFirst>
            <S.HeadColumnSecond>Topics</S.HeadColumnSecond>
            <S.HeadColumnThird>Replies</S.HeadColumnThird>
            <S.HeadColumnFourth>Tags</S.HeadColumnFourth>
          </S.ResultTableHeadRow>
        </S.ResultTableHead>

        <tbody>
          <S.DataRow>
            <S.DataColumn $width={200}>Vanadiy</S.DataColumn>
            <S.DataColumn>How to write code in an optimal style</S.DataColumn>
            <S.DataColumnThird $width={150}>5</S.DataColumnThird>
            <S.DataColumn>
              <S.TagList>
                <Li>
                  <S.TagLink href="#">VS code</S.TagLink>
                </Li>
                <Li>
                  <S.TagLink href="#">style</S.TagLink>
                </Li>
                <Li>
                  <S.TagLink href="#">code</S.TagLink>
                </Li>
                <Li>
                  <S.TagLink href="#">approach</S.TagLink>
                </Li>
              </S.TagList>
            </S.DataColumn>
          </S.DataRow>
        </tbody>
      </S.ResultsTable>
    </S.ResultsWrapper>
  );
};

export default Results;
