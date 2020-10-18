const greeter = (target) => {
  const sayHello = () => {
    console.log(`Hi, ${target}!`);
  };
  return sayHello;
};
const greet = greeter("Jun");
greet(); //Hi,Jun!


// 不要な代入を省く
const greeter2 = (target) => {
    return () => {
        console.log(`Hi, ${target}`);
    };
}

// returnのみなのでブロックごと省略
const greeter3 = (target) => () => console.log(`Hi, ${target}`);
