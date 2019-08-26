/**
 * Problem 2 「偶数のフィボナッチ数」
 * フィボナッチ数列の項は前の2つの項の和である. 最初の2項を 1, 2 とすれば, 最初の10項は以下の通りである.
 * 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
 * 数列の項の値が400万以下の, 偶数値の項の総和を求めよ.
 */
function fibonacci(count = 1) {
  const limit = 4000000
  let prev = 0
  let next = 1
  let resultEven = 0
  let totalResult = 0
  for (let i = 0; i < count; i++) {
    if (totalResult > limit)  break
    totalResult = prev + next
    prev = next
    next = totalResult
    console.log(totalResult)
    if (isEven(totalResult)) {
      resultEven += totalResult
      console.log('偶数:', resultEven)
    }
  }
  return resultEven
}

function isEven(number) {
  return number % 2 === 0
}

const number = process.argv[2]
console.log('引数:', number);
try {
  console.log('偶数合計:', fibonacci(number));
} catch (e) {
  console.log(e);
}
