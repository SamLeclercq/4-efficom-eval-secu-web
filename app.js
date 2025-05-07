const express = require('express');
const app = express();
const userRouter = require('./route/user.route.js');
const authRouter = require('./route/auth.route.js');
const messageRouter = require('./route/message.route.js');
const roleRouter = require('./route/role.route.js');
const {connect} = require('./framework/connection.js');
const sync = require('./framework/sync.js');
const limiter = require('./middleware/limiting.js');

const database = async () => {
    await connect();
    await sync();
}

database();

app.use(express.json());
app.use(limiter)
app.use('/user',limiter,userRouter);
app.use('/auth',limiter,authRouter);
app.use('/message',limiter,messageRouter);
app.use('/role',limiter,roleRouter);


module.exports = app;