(function () {
  'use strict'

  var canvas = document.getElementById('canvas')

  var engine = new Shape.Engine(canvas)
  var promise = new Promise((resolve) => { resolve() })

  setTimeout(() => {
    start()
  }, 500)

  function start () {
    promise.then(() => engine.toText('\uD83D\uDC18 '))
      .then(() => engine.shake())
      .then(() => engine.toText('LOVE'))
      .then(() => engine.shake())
      .then(() => engine.toText('\u83AB \u83AB'))
      .then(() => engine.shake())
      .then(() => engine.toText('\uD83C\uDF95 \uD83D\uDC90 \uD83C\uDF95'))
      .then(() => engine.shake())
      .then(() => engine.toText('\u2764 ~'))
      .then(() => engine.shake())
      .then(() => engine.clear())
  }
})()
