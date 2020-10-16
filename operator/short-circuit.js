const hello = undefined || null || 0 || NaN || "" || "Hello!";
const chao = ' ' && 100 && [] && {} && "Chao!";
false && console.log("1.", hello); //(nooutput)
true && console.log("2.", hello); //2.Hello!
false || console.log("3.", chao); //3.Chao!
