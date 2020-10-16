// スプレッド構文と分割代入の組み合わせ
const user = {
    id: 1,
    name: 'Patty Rabbit',
    email: 'patty@maple.town',
    age: 8,
};

const {id, ...withoutId} = user;
console.log(id, withoutId);
