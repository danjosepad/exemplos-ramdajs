export const curry = function (fn) {
  const arity = fn.length
  return function f1(...args) {
    if (args.length >= arity) {
      return fn(...args) // retorna a funcao
    } else {
      return function f2(...moreArgs) {
        const newArgs = args.concat(moreArgs)
        return f1(...newArgs) // retorna o valor acumulado do result
      }
    }
  }
}

export const add = function (a, b, c, d) {
  return a + b + c + d
}
