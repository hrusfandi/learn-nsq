require('dotenv').config();

const nsq = require('nsqjs');

const reader = new nsq.Reader('SMS_OTP', 'app1', {
  lookupdHTTPAddresses: `${process.env.LOOKUPD_HTTP_HOST}:${process.env.LOOKUPD_HTTP_PORT}`
});

reader.connect();

reader.on('message', msg => {
  console.log('Received message [%s]: %s', msg.id, msg.body.toString());
  msg.finish();
});