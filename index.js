const app = require('./app');
const { connectDB } = require('./config/db');

// Connect to the database
connectDB();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Database Connected`);
});
