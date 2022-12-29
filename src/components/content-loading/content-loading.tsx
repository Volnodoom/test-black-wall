import * as S from "./content-loading.style";

const ContentLoading = () => {
  return (
    <S.ContentLoadingWrapper>
      <S.ContentLoadingMessage>
        Please, wait for a moment
        <br />
        Content is loading...
      </S.ContentLoadingMessage>
    </S.ContentLoadingWrapper>
  );
};

export default ContentLoading;
