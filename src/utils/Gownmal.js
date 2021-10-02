const regexpKOR1 = /힘내+|귀엽+|반갑+|반가워+|최애+|애정+|이득+|갓+|존잘+|존멋+|존예+|아름+|순수+|잘하+|잘햇+|잘했+|다정+|스윗+|스위+|겸손+|긍정+|설레+|설래+/g;
const regexpKOR2 = /귀여+|기뻐+|이쁜+|이쁘+|이뽀+|예쁜+|예쁘+|예뽀+|예뻐+|멋져+|특별+|좋+|재밋+|재밌+|웃긴+|웃기+|최선+|최고+|베스트+|행복+|고맙+|다행+|편안+|소중+|정직+|좋다+|좋네+|조아+|조타+|상쾌+|유쾌+|윾쾌+|만족+|신나+|안심+|사랑스+/g;
const regexpKOR3 = /\^{2,}|ㅎ+|ㅋ+|><+|!+|~+/g;
const regexpKOR4 = /ㄱㅇㄷ+|오예+|아싸+|ㄳ+|감사+|ㄱㅅ+|굿+|ㄴㅇㅅ+|나이스+|ㅎㅇㅌ+|화이팅+|화잇+/g;
const regexpKOR5 = /안녕+|하트+|꽃+|러브+|데잇흐+|데이트+|기운+|희망+|단짝+|썸+|애인+|여친+|여자친구+|남친+|남자친구+|연인+|베프+|뽀레버+|우정+|은인+|보람+/g;
const regexpKOR6 = /조은+|바른+|바르+|좋은+|기쁜+|즐거운+|재밌는+|설레는+|빛나는+|반짝이는+|고마운+/g;
const regexpKOR7 = /성실+|진중+|사랑+|감동+|기쁨+|행운+|복+|잼+|짱+|꿀+|대박+|뿌듯+|평온+|기대+|위로+|홀가분+|열정+|청춘+|행복+/g;
const regexpKOR8 = /무야호+/g;

const regexpArray = [
  { reg: regexpKOR1, word: '별로' },
  { reg: regexpKOR2, word: '그냥저냥' },
  { reg: regexpKOR3, word: 'ㅡㅡ;' },
  { reg: regexpKOR4, word: '엥..' },
  { reg: regexpKOR5, word: '**' },
  { reg: regexpKOR6, word: '심심한' },
  { reg: regexpKOR7, word: '최악' },
  { reg: regexpKOR8, word: '무한도전' },
];

const converter = text => {
  let res = text;

  regexpArray.forEach(({ reg, word }) => {
    res = res.replace(reg, word);
  });

  return res;
};

export default converter;

/* TEST--------------------------------------------------------------------- */

// const testStr1 = '진짜 다행이네요 ㅠㅠ 고맙습니다.. 님도 힘내시고 행복하세요!! 좋은 일만 있으시길~';
// const testStr2 = '오예 내 최애가수 이번 신곡 진짜 대박 >< 진짜 좋아!';
// const testStr3 = '저 오늘 남자친구랑 데이트하기로 했어요!';
// const testStr4 = '이거 진짜 귀엽지않나요 ㅎㅎ 제가 좋아하는 캐릭터에요!';
// const testStr5 = '어제 본 영화 진짜 감동적이었어용 ㅎㅎ 강추합니다!';

// console.log(converter(testStr1));
// console.log(converter(testStr2));
// console.log(converter(testStr3));
// console.log(converter(testStr4));
// console.log(converter(testStr5));
