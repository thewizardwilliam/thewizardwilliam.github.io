function prime(num) {
  if (num === 1) return undefined;
  else if (num === 2) return true;
  else if (Number.isInteger(num) === false) {
    if (num * 1 === NaN) return NaN;
    else return new Error("Syntax Error: Expected an integer, but a decimal value was provided.",{name:"Synax Error",message:"Expected an integer, but a decimal value was provided."})
  }
  else if (num < 1) return new Error("Range Error: Number is too low.",{name:"Range Error",message:"Number is too low."});
  else {
    let r = true;
    for (let i = 2;i < num - 1;i++) {
      if (num % i === 0) {
        r = false;
      }
    }
    return r;
  }
}
