import React, {Component} from 'react';

var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'reetom@gmail.com',
      pass: '***********'
    }
  });
  
  var mailOptions = {
    from: 'reetom@gmail.com',
    to: 'james@yahoo.com',
    subject: 'SmartComm Subscription Notification',
    text: 'Thank you for subscribing to SmartComm. Watch how we take away your money!'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

class SendEmail extends Component {

    constructor(props){
        super(props);
    }
    render(){
        return(null);
    }
}
export default SendEmail;