import { Router } from "express";
import TaskController from "../controllers/TaskController";

const router = Router();

router.get('/',(req, res)=>{
  res.redirect('/tasks')
})

router.get("/about", (req, res) => {
  res.render("about");
});

router.get("/tasks", TaskController['index']);

router.post("/tasks/save", TaskController['save']);

router.post("/tasks/:id/update", TaskController['update']);

router.get("/tasks/:id/edit", TaskController['edit']);

router.get("/tasks/:id/delete", TaskController['delete']);

router.get("/tasks/:id/toggledone", TaskController['toggleDone']);

export default router;
