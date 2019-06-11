const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');
const bodyParser = require('body-parser');



const indexRouter = require('./routes/index');
const productsRouter = require('./routes/products');
const userRouter = require('./routes/user');
const productAPIRouter = require('./routes/API/productAPI');

require('./config/passport/passport')(passport);

const app = express();

const mongoose = require('mongoose');

mongoose.Promise = Promise;

const run = async() => {
    await mongoose.connect('mongodb+srv://huyho0202:huydum@datawebbanhang-0zasm.mongodb.net/DAWeb', {
        useNewUrlParser: true,
        autoReconnect: true,
        reconnectTries: 1000000,
        reconnectInterval: 3000
    })
}
run().catch(error => console.error(error))


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');


app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret: "cats",
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use('/', indexRouter);
app.use('/products', productsRouter);
app.use('/user', userRouter);
app.use('/API/product', productAPIRouter);


const isEqual = function(a, b, opts) {
    if (a == b) {
        return opts.fn(this)
    } else {
        return opts.inverse(this)
    }
}

var hbs = require('hbs');
hbs.registerHelper('if_eq', isEqual);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});
app.use(function(req, res, next) {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
});
// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;