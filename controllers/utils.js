var nodemailer = require('nodemailer');
var http = require('http');

var Utils = function(){}
Utils.prototype.sendGrid = function() {
    var postData = JSON.stringify({
            api_user : 'slimfire',
            api_key : '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',
            to : 'yohazel2@gmail.com',
            toname : 'yoho',
            subject : 'test',
            from : 'apps@slimfire.io',
            html : '<h1>SendGridSlimfire test!!!!</h1>'
        });
    var options = {
      hostname: 'api.sendgrid.com',
      path: '/api/mail.send.json',
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': postData.length
      }
    };

    var req = http.request(options, function(res) {
      console.log('STATUS: ' + res.statusCode);
      console.log('HEADERS: ' + JSON.stringify(res.headers));
      res.setEncoding('utf8');
      res.on('data', function (chunk) {
        console.log('BODY: ' + chunk);
      });
      res.on('end', function() {
        console.log('No more data in response.')
      })
    });
    req.on('error', function(e) {
      console.log('problem with request: ' + e.message);
    });

    // write data to request body
    req.write(postData);
    req.end();
    // http.post('https://api.sendgrid.com/api/mail.send.json', {
    //     api_user : 'slimfire',
    //     api_key : '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',
    //     to : 'yohazel2@gmail.com',
    //     from : 'apps@slimfire.io',
    //     html : '<h1>SendGridSlimfire test!!!!</h1>'
    // }, function(res){
    //     console.log(res);
    // })
};
Utils.prototype.sendEmail = function(email, message){
    var transporter = nodemailer.createTransport({
        service: 'Outlook',
        auth: {
            user: process.env.email,
            pass: process.env.password
        }
    });
    var mailOptions = {
        from: process.env.email,
        to: email,
        subject: 'trackMe flight tracker', 
        html: message 
    };

    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            console.log(error);
        }else{
            console.log('Message sent: ' + info.response);
        }
    });
}

module.exports = new Utils();