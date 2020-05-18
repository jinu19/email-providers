'use strict'

exports.handler = function(event, context, callback) {
  var response = {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/html; charset=utf-8'
    },
    body: '<p>Welcome to Frizbane New - AWS Code Test GIT- AWS CI/CD - Lambda- Api Gateway Test </p>'
  }
  callback(null, response)
}
