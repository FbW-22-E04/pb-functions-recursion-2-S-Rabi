function factorial(number) {
  if (number === 0) {
    return 1;
  }
  return number * factorial(number - 1);
}
console.log(factorial(5));
console.log("---------------------------");

function fac(num) {
  if (num === 0) {
    return 1;
  }

  return num + fac(num - 1);
}
console.log(fac(4));
