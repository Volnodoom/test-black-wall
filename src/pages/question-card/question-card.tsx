import QuestionCardUser from "components/question-card-user/question-card-user";
import TagList from "components/tag-list/tag-list";
import * as S from "./question-card.style";

const XXX = String.raw`
<Pressable onPress={()=>{}}>

<View style={{ flex: 1, flexDirection: 'row',width: widthP || width,borderBottomWidth:2 }}>
{
item.components.map((comp, componentIndex) =>{
return getComponent({item: {...comp,key: &#x24;{item.key}[&#x24;{index}].&#x24;{comp.key},
watchKeys: getWatchKeys(index, item, comp),
    },
},b[componentIndex],heightP|| height,control,setValue,getValues)})}
</View>
</Pressable>
`;

const QuestionCard = () => {
  return (
    <S.CardWrapper>
      <S.CardInfoWrapper>
        <S.CardInfoTitle>
          open up action on longpress of list in react native
        </S.CardInfoTitle>
        <S.CardInfoTime>
          <S.CardInfoTimeTitle>Asked</S.CardInfoTimeTitle>
          <S.CardInfoTimeData>today</S.CardInfoTimeData>

          <S.CardInfoTimeTitle>Modified </S.CardInfoTimeTitle>
          <S.CardInfoTimeData>today</S.CardInfoTimeData>

          <S.CardInfoTimeTitle>Viewed</S.CardInfoTimeTitle>
          <S.CardInfoTimeData>11 times</S.CardInfoTimeData>
        </S.CardInfoTime>
      </S.CardInfoWrapper>

      <S.CardContentWrapper>
        <S.CardContent>
          just like in the gmail app i need help when user longpress on certain
          mail in inbox the message will be highlight followed by a pop up on
          the header contain bin icon archive and other option how do i do it so
          far i displayed only the list using map and i added each pressable
        </S.CardContent>

        <S.CardContentCode>{XXX}</S.CardContentCode>

        <TagList tags={["react-native"]} />
        <QuestionCardUser
          userName={"Himadrish K Aralere"}
          timeUpdate={"55 mins ago"}
        />
      </S.CardContentWrapper>

      <S.CardAnswerTitle>1 Answer</S.CardAnswerTitle>
      <S.CardContentWrapper $isComment>
        <S.CardContent>
          Try checking for onLongPress as doc Called if the time after onPressIn
          lasts longer than 500 milliseconds. This time period can be customized
          with delayLongPress
        </S.CardContent>

        <QuestionCardUser userName={"Aureo Beck"} timeUpdate={"43 mins ago"} />
      </S.CardContentWrapper>

      <S.CardContentWrapper $isComment>
        <S.CardContent>
          Try checking for onLongPress as doc Called if the time after onPressIn
          lasts longer than 500 milliseconds. This time period can be customized
          with delayLongPress
        </S.CardContent>

        <QuestionCardUser userName={"Aureo Beck"} timeUpdate={"43 mins ago"} />
      </S.CardContentWrapper>

      <S.CardPagination>
        <S.CardPaginationItem $isSelected to="1">
          1
        </S.CardPaginationItem>
        <S.CardPaginationItem to="2">2</S.CardPaginationItem>
        <S.CardPaginationItem to="3">3</S.CardPaginationItem>
        <S.CardPaginationItem to="">Next</S.CardPaginationItem>
      </S.CardPagination>
    </S.CardWrapper>
  );
};

export default QuestionCard;
