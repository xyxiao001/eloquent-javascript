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

try {
  console.log(a)
} catch (e) {
  console.log(e)
}

// 我们习惯将 var a = 2; 看作一个声明，而实际上 JavaScript 引擎并不这么认为。它将 var a
// 和 a = 2 当作两个单独的声明，第一个是编译阶段的任务，而第二个则是执行阶段的任务。
// 这意味着无论作用域中的声明出现在什么地方，都将在代码本身被执行前首先进行处理。
// 可以将这个过程形象地想象成所有的声明（变量和函数）都会被“移动”到各自作用域的
// 最顶端，这个过程被称为提升。
// 声明本身会被提升，而包括函数表达式的赋值在内的赋值操作并不会提升。















//
