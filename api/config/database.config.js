const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const connectDB = async () => {
  try {
    await mongoose
      .connect(process.env.MONGO_URI, {})
      .then((url) =>
        console.log(
          `database connected successfully with ${url?.connection?.port} - ${url?.connection?.name}`
            .cyan.bold
        )
      );
  } catch (error) {
    console.log(`${error}`.red.bold);
    process.exit(1);
  }
};

module.exports = connectDB;
