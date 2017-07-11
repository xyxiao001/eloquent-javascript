// 函数作用域和块级作用域
function foo(a) {
  var b = 2
  function bar() {

  }
  var c = 3
}

// a, b, c bar 仅仅在foo 内部可以使用

// 最小授权原则
(function () {
  function doSomething(a) {
    b = a + doSomethingElse(a * 2)
    console.log(b * 3)
  }

  function doSomethingElse(a) {
    return a - 1
  }

  var b
  doSomething(3)
})()

// 上述可能导致doSomethingElse被异常使用
// 更“合理” 的设计会将这些私有的具体内容隐藏在 doSomething(..) 内部， 例如：
;(function () {
  function doSomething(a) {
    function doSomethingElse(a) {
      return a - 1
    }

    var b
    b = a + doSomethingElse(a * 2)
    console.log(b * 3)
  }
  doSomething(3)
})()
