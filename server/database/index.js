import User from "./model/user.js"
import Thread from "./model/thread.js"
import postgresConnection from "./connection.js"

const dbInit = async () => {
  try {
    await postgresConnection.authenticate();
    console.log("Connection has been established successfully.");
    await User.sync({ alter: true });
    await Thread.sync({ alter: true });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }

};

export default dbInit