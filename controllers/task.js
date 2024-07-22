
const Task = require("../model/task");
async function handleGetTask(req, res) {
    try {
        res.status(201).json({ msg: "welcome to Todo" })

    }
    catch (error) {
        res.status(400).json({ message: error.message })

    }
}

async function handleGetAllTasks(req, res) {
    try {
        const allTasks = await Task.find({})
        return res.json(allTasks)

    }

    catch (error) {
        return res.status(400).json({ message: error.message })

    }
}
async function handleGenerateTask(req, res) {
    try {
        {

            const body = req.body
            if (!body.title ||
                !body.priority ||
                !body.is_Done

            ) {
                return res.status(400).json({ msg: "cannot generate the task" })

            }

            const result = await Task.create({
                title: body.title,
                priority: body.priority,
                isDone: body.is_Done,
            })

            console.log("result", result)
            return res.status(201).json({ msg: "success" })
        }

    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}


async function handleUpdateTaskByid(req, res) {
    try {
        const updates = req.body;
        const TaskId = req.params.id;
        const result = await Task.findByIdAndUpdate(TaskId, updates, { new: true })

        return res.status(201).json({ msg: "success" })

    }
    catch (error) {
        return res.status(400).json({ message: error.message })
    }
}


async function handleDeleteTaskByid(req, res) {
    try {

        const result = await Task.findByIdAndDelete(req.params.id)

        return res.status(201).json({ msg: "success" })
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}


module.exports = {
    handleGetTask,
    handleGenerateTask,
    handleGetAllTasks,
    handleUpdateTaskByid,
    handleDeleteTaskByid,
};