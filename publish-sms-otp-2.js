require('dotenv').config();

const nsq = require('nsqjs');

const writer = new nsq.Writer(
  process.env.NSQD2_HTTP_HOST,
  process.env.NSQD2_HTTP_PORT
);

writer.connect();

writer.on('ready', () => {
  writer.publish('SMS_OTP', `[NSQD2] ${Date()} Dear guess, please confirm your email address`);
  writer.close();
});

writer.on('closed', () => {
  console.log('writer closed');
});