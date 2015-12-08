'use strict'

const Communication = require('process-communication')
const Helpers = require('../helper.js')

const communication = Communication.forkFile(__dirname + '/worker.js')

let requestStart = Helpers.now()
let ms = null

communication.request('random').then(function(){
  ms = Helpers.diff(requestStart)
  console.log('first request took %d miliseconds', ms)

  requestStart = Helpers.now()

  communication.request('random').then(function(){
    communication.kill()

    ms = Helpers.diff(requestStart)
    console.log('second request took %d miliseconds', ms)
  })
})
