const {Blog} = require('../models');
const nodemailer = require('nodemailer');
const express = require('express');
// async..await is not allowed in global scope, must use a wrapper


module.exports = {
    data() {

    },
    methods: {


    },

    async SendContact(res, req) {

        async function main() {
            // Generate test SMTP service account from ethereal.email
            // Only needed if you don't have a real mail account for testing
            let testAccount = await nodemailer.createTestAccount();

            // create reusable transporter object using the default SMTP transport
            let transporter = nodemailer.createTransport({
                host: "smtpauth.discountdomains.co.nz",
                port: 587,
                secure: false, // true for 465, false for other ports
                tls: {
                    rejectUnauthorized:false,
                    ignoreTLS: true,
                },
                auth: {
                    user: 'contact@inhouseweb.nz', // generated ethereal user
                    pass: 'buster' // generated ethereal password
                }
            });

            // send mail with defined transport object
            let info = await transporter.sendMail({
                from: '"Inhouse" <contact@inhouseweb.nz>', // sender address
                to: "rt_condon@hotmail.com, inhouseweb@hotmail.com", // list of receivers
                subject: "Hello ✔", // Subject line
                text: "Hello world?", // plain text body
                html: "<b>Hello world?</b>", // html body
            });

            console.log("Message sent: %s", info.messageId);
            // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

            // Preview only available when sending through an Ethereal account
            console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
            // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
        }
        main().catch(console.error);
    },


    async SendForm(res, req) {

        async function SendMail() {

            // Generate test SMTP service account from ethereal.email
            // Only needed if you don't have a real mail account for testing
            console.log('SendMail Runnin');
            let testAccount = await nodemailer.createTestAccount();

            // create reusable transporter object using the default SMTP transport
            let transporter = nodemailer.createTransport({
                host: "smtpauth.discountdomains.co.nz",
                tls: {
                    rejectUnauthorized:false,
                    ignoreTLS: true,
                },
                port: 587,
                secure: false, // true for 465, false for other ports
                auth: {
                    user: 'contact@inhouseweb.nz', // generated ethereal user
                    pass: 'buster' // generated ethereal password
                }
            });

            // send mail with defined transport object
            let info = {
                from: '"Do not reply" <contact@inhouseweb.nz>', // sender address
                name: 'example.com',
                to: "rt_condon@hotmail.com, inhouseweb@hotmail.com", // list of receivers
                subject: "Hello ✔", // Subject line
                text: "Hello world?", // plain text body
                html: "<b>Hello world?</b>", // html body
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
        SendMail().catch(console.error);
    },


};