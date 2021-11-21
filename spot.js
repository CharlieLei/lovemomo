(function () {
  'use strict'

  let canvas = document.getElementById('canvas')

  let engine = new Shape.Engine(canvas)
  let promise = new Promise((resolve) => { resolve() })

  document.getElementById('canvas').addEventListener('click', start)

  setTimeout(() => {
    start()
  }, 500)

  function start () {
    document.getElementById('canvas').removeEventListener('click', start);
    promise
      .then(() => engine.toText('\uD83D\uDC18 ', 'gray'))
      .then(() => engine.shake())
      .then(() => engine.toText('\u2764', 'red'))
      .then(() => engine.shake())
      .then(() => engine.toText('\u83AB \u83AB', 'white'))
      .then(() => engine.shake())
      .then(() => engine.toText('\uD83C\uDF95 \uD83D\uDC90 \uD83C\uDF95', '#E05263'))
      .then(() => engine.shake())
      .then(() => engine.toText('\uD83D\uDE18', '#FFFF80'))
      .then(() => engine.shake())
      .then(() => engine.clear())
      .then(() => document.getElementById('canvas').addEventListener('click', start))
      .then(() => engine.toText('\u27F3', 'white'))
  }
})()
