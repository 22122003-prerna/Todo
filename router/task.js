const express = require("express");

const router = express.Router();
const { handleGetTask, handleGetAllTasks, handleGenerateTask, handleUpdateTaskByid, handleDeleteTaskByid } = require("../controllers/task")

router.route("/")
    .get(handleGetTask)

router.route("/tasks")
    .get(handleGetAllTasks)
    .post(handleGenerateTask)

router.route("/task/:id")
    .put(handleUpdateTaskByid)
    .delete(handleDeleteTaskByid)

module.exports = router;
