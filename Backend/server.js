// app.js or server.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./connect');
const router = express.Router();

const loginRouter = require('./routes/login');
const registrationRouter = require('./routes/register'); // Import the registration router

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

// Mount login and registration routers
app.use('/login', loginRouter);
app.use('/register', registrationRouter); // Mount the registration router

// Start the server
connectDB().then(() => {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
});
module.exports = router;