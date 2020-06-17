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

        async function SendMail() {

            nodemailer.createTestAccount((err, account) => {
                if (err) {
                    console.error('Failed to create a testing account');
                    console.error(err);
                    return process.exit(1);
                }

                console.log('Credentials obtained, sending message...');

                // NB! Store the account object values somewhere if you want
                // to re-use the same account for future mail deliveries

                // Create a SMTP transporter object
                let transporter = nodemailer.createTransport(
                    {
                        host: "smtpauth.discountdomains.co.nz",
                        //requireTLS: true, //Force TLS
                        tls: {
                            //rejectUnauthorized:false,
                            //ignoreTLS: true,
                        },
                        port: 587,
                        secure: false, // true for 465, false for other ports
                        auth: {
                            user: 'contact@inhouseweb.nz', // generated ethereal user
                            pass: 'buster' // generated ethereal password
                        },
                        logger: true,
                        debug: false // include SMTP traffic in the logs
                    },
                    {
                        // default message fields

                        // sender info
                        from: 'contact@inhouseweb.nz',
                        headers: {
                            'X-Laziness-level': 1000 // just an example header, no need to use this
                        }
                    }
                );

                // Message object
                let message = {
                    // Comma separated list of recipients
                    to: 'rt_condon@hotmail.com, gewedi3549@rm2rf.com',

                    // Subject of the message
                    subject: 'Nodemailer is unicode friendly ✔' + Date.now(),

                    // plaintext body
                    text: 'Hello to myself!',

                    // HTML body
                    html: `<p><b>Hello</b> to myself <img src="cid:note@example.com"/></p>
        <p>Here's a nyan cat for you as an embedded attachment:<br/><img src="cid:nyan@example.com"/></p>`,

                    // AMP4EMAIL
                    amp: `<!doctype html>
        <html ⚡4email>
          <head>
            <meta charset="utf-8">
            <style amp4email-boilerplate>body{visibility:hidden}</style>
            <script async src="https://cdn.ampproject.org/v0.js"></script>
            <script async custom-element="amp-anim" src="https://cdn.ampproject.org/v0/amp-anim-0.1.js"></script>
          </head>
          <body>
            <p><b>Hello</b> to myself <amp-img src="https://cldup.com/P0b1bUmEet.png" width="16" height="16"/></p>
            <p>No embedded image attachments in AMP, so here's a linked nyan cat instead:<br/>
              <amp-anim src="https://cldup.com/D72zpdwI-i.gif" width="500" height="350"/></p>
          </body>
        </html>`,



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
                transporter.sendMail(message, (error, info) => {
                    if (error) {
                        console.log('Error occurred');
                        console.log(error.message);
                        res.sendStatus(500);
                        return process.exit(1);

                    }

                    console.log('Message sent successfully!');
                    //console.log(nodemailer.getTestMessageUrl(info));

                    // only needed when using pooled connections
                    //transporter.close();
                });
            });
        }

        SendMail().catch(console.error);
        //res.sendStatus(200);
        //console.log(req.body.To);
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

    // Create a new Blog
    async createBlog(req, res) {
        try {
            const blogData = await Blog.create(req.body);
            //console.log(req.body.Title, req.body.Blurb);
            this.Title = req.body.Title;
            this.Blurb = req.body.Blurb;
            //this.SendMail.catch(console.error);
            //await this.SendMail();

            res.send(blogData);
            //his.SendMail().catch(console.error);
        } catch (err) {
            res.status(400).send({})
        }

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
            let info = await transporter.sendMail({
                from: '"Do not reply" <contact@inhouseweb.nz>', // sender address
                to: "rt_condon@hotmail.com, inhouseweb@hotmail.com", // list of receivers
                subject: this.Title, // Subject line
                text: this.Blurb, // plain text body
                html: "<h1>"+this.Blurb+"</h1>" // html body
            });

            console.log("Message sent: %s", info.messageId);
            // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

            // Preview only available when sending through an Ethereal account
            console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
            // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
        }
        SendMail().catch(console.error);
    },

    // Get Single blog with ID
    async getBlog(req, res) {
        try {
            const blogId = req.params.blogId;
            const blog = await Blog.findOne({
                where: {
                    id: blogId
                }
            });

            // Blog does not exist
            if (!blog) {
                res.status(403).send({
                    error: ' Blog Post does not exist'
                })
            }
            // Convert blog to JSON data
            const blogJson = blog.toJSON();

            //Send Single blog to Front-End to display
            res.send({
                blog: blogJson
            })
        } catch (e) {
            res.status(400).send({
                error: e
            })
        }
    },
    // Get all existing blogs
    async getAll(req, res) {
        try {
            const allBlogs = await Blog.findAll();
            //Send all existing Blogs to Front-End to display
            res.send({
                Blogs: allBlogs
            })
        } catch (e) {
            res.status(400).send({
                error: e
            })
        }
    },
    async deleteBlog(req,res) {
        try{
            const blogId = req.params.blogId;
            const del = await Blog.destroy({
                where: {
                    id: blogId
                }
            })
            console.log(del)

        }catch (e) {
            res.status(400).send({
                error: e
            })
        }
    }
};