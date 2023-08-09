import Task from "../models/Task";



const TaskController = {
    index: async (req, res) => {
        const tasks = await Task.find().lean();
        res.render("index", {
          tasks,
          layout: "main",
        });
    },

    save: async (req, res) => {
        try {
          const task = Task({
            title: req.body.title.trim(),
            description: req.body.description.trim()
          });
          const taskSaved = await task.save();
          if (taskSaved) {
            res.redirect("/tasks");
          }
        } catch (error) {
          res.send('Error al guardar los datos <br> <a href="/">back</a>');
        }
      },

    edit:async (req, res) => {
        try {
          const task = await Task.findById(req.params.id).lean();
          res.render("partials//tasks/taskEdit", { task });
        } catch (error) {
          res.redirect("/tasks");
        }
      },

    update:async (req, res) => {
        try {
          await Task.findByIdAndUpdate(req.params.id, {
            title: req.body.title.trim(),
            description: req.body.description.trim()
          });
          res.redirect("/tasks");
        } catch (error) {
          console.log(error);
        }
      },

    delete:async (req, res) => {
        try {
          await Task.findByIdAndRemove(req.params.id);
          res.redirect("/tasks");
        } catch (error) {
          console.log(error);
        }
      },

    toggleDone: async (req, res) => {
        try {
          const task = await Task.findById(req.params.id);
          task.done = !task.done;
          await task.save()
          res.redirect("/tasks");
        } catch (error) {
          console.log(error);
        }
      },
  }

  export default TaskController