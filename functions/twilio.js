const twilio = require('twilio');

const accountSid = 'ACa04da661ef117e59f036399e2a38f4ab';
const authToken = '9bbf39e1ff9540d3771432711169cfad';

module.exports = new twilio.Twilio(accountSid, authToken);