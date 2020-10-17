// Nullish Coalescing と　Optional Chaining
const users = [
  {
    name: "Patty Rabbit",
    address: {
      town: "Maple Town",
    },
  },
  {
    name: "Rolley Cocker",
    address: {},
  },
  null,
];

for (u of users) {
  const user = u ?? { name: "(Somebody)" };
  /**
   * nullish-coalescing -> ??
   * 左辺がnullまたはundefineのときだけ右辺が評価される
   * OR演算子でも似たようなことができるが、orの場合は0や空文字もスルーされてしまうので、
   * より厳密なこちらを使うほうがよい
   *
   * Optional Chaining -> ?.
   * 指定したキーのプロパティ・メソッドが存在しない場合、undefinedを返す（TypeErrorにならず、if文での判定を減らせる）
   **/
  const town = user?.address?.town ?? "(Somewhere)";
  console.log(`${user.name} lives in ${town}`);
}
