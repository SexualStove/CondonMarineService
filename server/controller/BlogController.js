const {Blog} = require('../models');
const nodemailer = require('nodemailer');
// async..await is not allowed in global scope, must use a wrapper
const Times = [];
const DebtLodgementTimes = [];

module.exports = {
    data() {
        return{
            Title: "None atm",
            Blur: "None atm again",
        }
    },
    methods: {


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
                host: "smtp-relay.sendinblue.com",
                tls: {
                    //rejectUnauthorized:false,
                    //ignoreTLS: true,
                },
                port: 587,
                secure: false, // true for 465, false for other ports
                auth: {
                    user: process.env.Mail_User, // generated ethereal user
                    pass: process.env.Pass // generated ethereal password
                }
            });

            // send mail with defined transport object
            console.log("New massage by "+req.body.Details.Name);
            let info = {
                from: '"Do not reply" <contact@inhouseweb.nz>', // sender address
                to: 'rt_condon@hotmail.com', // list of receivers
                subject: "Contact Us Form", // Subject line
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
        res.sendStatus(200);
        res.end();
    },




    async SendForm(req, res) {

        async function SendMail() {

            // Generate test SMTP service account from ethereal.email
            // Only needed if you don't have a real mail account for testing
            console.log('SendMail Runnin');

            // create reusable transporter object using the default SMTP transport
            let transporter = nodemailer.createTransport({
                host: "smtp-relay.sendinblue.com",
                tls: {
                    //rejectUnauthorized:false,
                    //ignoreTLS: true,
                },
                port: 587,
                secure: false, // true for 465, false for other ports
                auth: {
                    user: process.env.Mail_User, // generated ethereal user
                    pass: process.env.Pass // generated ethereal password
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
        res.sendStatus(200);
        res.end();
    }
};