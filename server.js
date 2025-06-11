const express = require("express");
const MongoStore = require("connect-mongo");
const session = require("express-session");
const userRouter = require("./routes/userRoute");

const app = express();
const dotenv = require("dotenv");
dotenv.config();

app.use(express.json());
const connectDb = require("./utils/connection");

const PORT = process.env.PORT || 5000;
app.use(
  session({
    secret: process.env.SESSION_SECRET || "keyboard cat",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: process.env.DATABASE_URL,
      collectionName: "sessions",
    }),
    cookie: {
      maxAge: 1000 * 60 * 60 * 24,
      httpOnly: true,
      secure: false,
    },
  })
);

app.use("/auth", userRouter);

connectDb();

app.listen(PORT, () => {
  console.log(`Serevr is running on port ${PORT}`);
});
