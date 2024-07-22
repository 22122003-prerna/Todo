const express = require("express")
const app = express();
const taskRouter = require("./router/task")
const { connectToMongoDb } = require("./connection/task")

const PORT = 9000;

connectToMongoDb("mongodb://127.0.0.1:27017/todo")
    .then(() => console.log("MongoDb Connected"))

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use("/api", taskRouter)

app.listen(PORT, () => console.log(`Server Started at ${PORT}`))