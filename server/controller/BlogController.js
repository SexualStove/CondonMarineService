const {Blog} = require('../models');
const nodemailer = require('nodemailer');
const express = require('express');

// async..await is not allowed in global scope, must use a wrapper
const Times = [];
const DebtLodgementTimes = [];
module.exports = {
    data() {
        return {
            passed: true,
            //Times: ['', '']
        }
    },
    methods: {


    },


    async SendContact(req, res) {
        console.log(req.method);
        //console.log(req);
        /*if($_SERVER['REQUEST_METHOD'] === 'OPTIONS' && ENV === 'devel') {
            header('Access-Control-Allow-Origin: *');
            header('Access-Control-Allow-Headers: X-Requested-With');
            header("HTTP/1.1 200 OK");
            die();
        }*/

        async function SendMail() {

            //console.log(req.body);

            // Generate test SMTP service account from ethereal.email
            // Only needed if you don't have a real mail account for testing
            console.log('SendMail Runnin');

            // create reusable transporter object using the default SMTP transport
            let transporter = nodemailer.createTransport({
                host: "mail.smtp2go.com",
                tls: {
                    rejectUnauthorized:false,
                    ignoreTLS: true,
                },
                to: 'rt_condon@hotmail.com',
                port: 2525,
                secure: false, // true for 465, false for other ports
                auth: {
                    user: 'InHouseWeb', // generated ethereal user
                    pass: 'L3tm31n' // generated ethereal password
                }
            });

            // send mail with defined transport object
            console.log("New massage by "+req.body.Details.Name);
            let info = {
                from: '"Do not reply" <contact@inhouseweb.nz>', // sender address
                name: 'example.com',
                to: 'rt_condon@hotmail.com', // list of receivers
                subject: "Hello ✔", // Subject line
                html: "<b>Your details</b><br>"+
                        "Name: "+req.body.Details.Name+"<br>"+
                        "Email: "+req.body.Details.Email+"<br>"+
                        "Contact Number: "+req.body.Details.Phone+"<br>"+
                        "Message: "+req.body.Details.Message+"<br>"// html body
            };
            transporter.verify(function(error, success) {
                console.log("Testing to see if transporter connected");
                if (error) {
                    console.log(error);
                } else {
                    console.log("Server is ready to take our messages");
                    console.log(success)
                }
            });

            let message = transporter.sendMail(info, (error, info) => {

                if (error) {
                    console.log('Error occurred');
                    console.log(error.message);
                    return process.exit(1);
                }

                console.log('Message sent successfully!');
                console.log(nodemailer.getTestMessageUrl(info));
                console.log(info);

                // only needed when using pooled connections
                //transporter.close();
            });

            //console.log("Message sent: %s", message.messageId);
            // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

            // Preview only available when sending through an Ethereal account
            console.log("Preview URL: %s", nodemailer.getTestMessageUrl(message));
            // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
        }
        console.log(req.body);
        console.log(Times);
        if(Times.includes(req.body.Time)) {
            console.log("Already Sent");
            Times.pop();
        } else {
            SendMail().catch(console.error);
            Times.push(req.body.Time);
        }
    },




    async SendForm(req, res) {

        async function SendMail() {

            // Generate test SMTP service account from ethereal.email
            // Only needed if you don't have a real mail account for testing
            console.log('SendMail Runnin');

            // create reusable transporter object using the default SMTP transport
            let transporter = nodemailer.createTransport({
                host: "mail.smtp2go.com",
                tls: {
                    rejectUnauthorized:false,
                    ignoreTLS: true,
                },
                to: 'rt_condon@hotmail.com',
                port: 2525,
                secure: false, // true for 465, false for other ports
                auth: {
                    user: 'InHouseWeb', // generated ethereal user
                    pass: 'L3tm31n' // generated ethereal password
                }
            });

            // send mail with defined transport object
            let info = {
                from: '"Do not reply" <contact@inhouseweb.nz>', // sender address
                name: 'Do not reply',
                to: 'rt_condon@hotmail.com', // list of receivers
                subject: "Debt Lodgment From", // Subject line
                html: "<pre>"+req.body.CompiledString+"</pre>", // html body
            };
            transporter.verify(function(error, success) {
                console.log("Testing to see if transporter connected");
                if (error) {
                    console.log(error);
                } else {
                    console.log("Server is ready to take our messages");
                    console.log(success)
                }
            });

            let message = transporter.sendMail(info, (error, info) => {

                if (error) {
                    console.log('Error occurred');
                    console.log(error.message);
                    return process.exit(1);
                }

                console.log('Message sent successfully!');
                console.log(nodemailer.getTestMessageUrl(info));
                console.log(info);

                // only needed when using pooled connections
                //transporter.close();
            });

            //console.log("Message sent: %s", message.messageId);
            // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

            // Preview only available when sending through an Ethereal account
            console.log("Preview URL: %s", nodemailer.getTestMessageUrl(message));
            // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
        }
        console.log(req.body);
        console.log(DebtLodgementTimes);
        if(DebtLodgementTimes.includes(req.body.Time)) {
            console.log("Already Sent");
            DebtLodgementTimes.pop();
        } else {
            SendMail().catch(console.error);
            DebtLodgementTimes.push(req.body.Time);
        }
    }


};