const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const expressValidator = require("express-validator");
require("dotenv").config();

const home = require("./api/lib/veiws/index");
const authRoutes = require("./api/lib/veiws/auth/auth");
const userRoutes = require("./api/lib/veiws/auth/user");
const categoryRoutes = require("./api/lib/veiws/shopping/category");
const productRoutes = require("./api/lib/veiws/shopping/products");
const orderRoutes = require("./api/lib/veiws/shopping/orders");
const visaPaymentRoute= require("./api/lib/veiws/payments/visa");


// app
const app = express();

// db
mongoose
    .connect(process.env.DATABASE, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true 
    })
    .then(() => console.log('DB Connected'));

// middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressValidator());
app.use(cors());
// home route
app.use('/', home); // developer page
// routes middleware
app.use('/v1/api', authRoutes);
app.use('/v1/api', userRoutes);
app.use('/v1/api', categoryRoutes);
app.use('/v1/api', productRoutes);
app.use('/v1/api', orderRoutes);
app.use('/api', visaPaymentRoute);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
