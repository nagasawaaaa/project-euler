/**
 * Problem 1 「3と5の倍数」
 * 10未満の自然数のうち, 3 もしくは 5 の倍数になっているものは 3, 5, 6, 9 の4つがあり, これらの合計は 23 になる.
 * 同じようにして, 1000 未満の 3 か 5 の倍数になっている数字の合計を求めよ.
 */

function calc(number = 1) {
  let result = 0;
  for (let i = 0; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      result += i
    }
  }
  return result
}

const number = process.argv[2]
console.log('引数:', number);
try {
  console.log('合計:', calc(number))
} catch (e) {
  console.log(e);
}
