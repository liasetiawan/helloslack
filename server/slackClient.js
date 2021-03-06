'use strict';

const RtmClient  = require('@slack/client').RTMClient;
const CLIENT_EVENTS = require('@slack/client').CLIENT_EVENTS;

function handleOnAuthenticated(rtmStartData){
	console.log(`Logged in as ${rtmStartData.sel.name} of team ${rtmStartData.team.name}, but not yet connected to a channel`);

}

function addAuthenticatedHandler(rtm, handler){
	rtm.on(CLIENT_EVENTS.RTM.AUTHENTICATED,handler);
}

module.exports.init= function slackClient(token, logLevel){
	const rtm = new RtmClient(token, {logLevel: 'debug'});
	addAuthenticatedHandler(rtm, handleOnAuthenticated);
	return rtm;
}
