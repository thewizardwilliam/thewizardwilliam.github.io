function prime(num) {
  if (num === 1) return undefined;
  else if (num === 2) return true;
  else if (Number.isInteger(num) === false) {
    if (num * 1 !== num) return "Syntax Error: Expected an integer.";
    else return "Syntax Error: Expected an integer, but a decimal value was provided."
  }
  else if (num < 1) return "Range Error: Number is too low."
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
