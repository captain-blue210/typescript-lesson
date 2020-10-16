const patty = {
  name: "Patty Rabbit",
  email: "patty@maple.town",
  address: { town: "Maple Town" },
};
const rolley = { ...patty, name: "Rolley Cocker" };
rolley.email = "rolley@palm.town";
rolley.address.town = "Palm Town";
// address.townは参照コピーになっており、pattyのものが書き換わってしまった
console.log(patty);
//{
// name:'PattyRabbit',
// email:'patty@maple.town',
// address:{town:'PalmTown'}
//}
