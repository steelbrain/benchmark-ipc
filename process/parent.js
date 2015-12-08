'use strict'

const Communication = require('process-communication')
const Helpers = require('../helper.js')

const communication = Communication.forkFile(__dirname + '/worker.js')
const requestStart = Helpers.now()

communication.request('random').then(function(){
  communication.kill()
  const ms = Helpers.diff(requestStart)

  console.log('request took %d miliseconds', ms)
})
