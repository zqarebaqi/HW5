const max = Number.MAX_SAFE_INTEGER;

function maxInt() {
  try {
    if (arguments.length === 0) throw "null";

    if (arguments.length === 1) {
      if (typeof arguments[0] === "string") throw "Big Error";
      if (arguments[0] > max) throw "Big Error";
      if (!Number.isInteger(Number(arguments[0]))) throw "Big Error";

      return BigInt(arguments[0]);
    }

    if (arguments.length > 1) {
      for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) throw "Big Error";
        if (!Number.isInteger(Number(arguments[i]))) throw "Big Error";
        if (arguments[i] > arguments[0]) {
          arguments[0] = arguments[i];
        }
      }
      return BigInt(arguments[0]);
    }
  } catch (error) {
    return error;
  }
}
console.log(maxInt(1n, 10n, 5n));
console.log(maxInt("10", 5n, 1));
console.log(maxInt());
console.log(maxInt(2 ** 53 - 1));
console.log(maxInt(2 ** 53));
console.log(maxInt("10" / 3));
console.log(maxInt("10" / 2));
console.log(maxInt(10 - 12, 10 - 10, 10 - 11));
console.log(maxInt(0n)); //n
console.log(maxInt(""));
