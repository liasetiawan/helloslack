'use strict';

const slackClient = require('../server/slackClient');
const service = require('../server/service');
const http = require('http');
const server = http.createServer(service);
const slackToken = 'cnH3o7WQBKONc54QobPGhLte';
const slackLogLevel='debug';

const rtm = slackClient.init(slackToken, slackLogLevel);
rtm.start();

slackClient.addAuthenticatedHandler(rtm,()=> server.listen(3000));

server.on('listening', function(){
console.log(`helloslack is listening on ${server.address().port} in ${service.get('env')}`);

});
