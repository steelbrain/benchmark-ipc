'use strict'

const create = require('process-communication').create

const communication = create()

communication.onRequest('random', function(data, message) {

})
