const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE;
const app = require('./app');

mongoose.connect(DB).then(() => {
  console.log('DB Connection successfull');
});

const port = 3000;
app.listen(port, () => console.log(`Server is running 💋`));
