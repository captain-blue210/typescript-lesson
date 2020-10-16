const response = {
  data: [
    {
      id: 1,
      name: "Patty Rabbit",
      email: "patty@maple.town",
    },
    {
      id: 2,
      name: "Rolley Cocker",
      email: "rolley@palm.town",
    },
    {
      id: 3,
      name: "Bobby Bear",
      email: "bobby@maple.town",
    },
  ],
};
// users = []はresponseのdataに値がなかった場合に備えて空配列をデフォルト値にしている
const { data: users = [] } = response;
console.log(users);
