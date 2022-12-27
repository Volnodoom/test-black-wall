import { Li } from "components/styled";
import * as S from "./tag-list.style";

type TagListType = {
  tags: string[];
};

const TagList = ({ tags }: TagListType) => {
  return (
    <S.TagList>
      {tags.map((tag, index) => (
        <Li key={`list-key-${index}`}>
          <S.TagLink to={`/question/tagged/${tag}`}>{tag}</S.TagLink>
        </Li>
      ))}
    </S.TagList>
  );
};

export default TagList;
