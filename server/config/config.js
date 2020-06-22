module.exports ={

    port: process.env.PORT || 8081,
    db: {
        user: process.env.DB_USER || 'MITBlogger',
        password: process.env.DB_PASS || 'password',
        database: process.env.DB_NAME || 'MITBlog',
        host: 'http://157.245.188.181' || 'localhost',
        dialect: 'sqlite',
        storage: './MITBlog.sqlite'
    }

};