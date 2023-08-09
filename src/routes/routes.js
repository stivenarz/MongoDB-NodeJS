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

router.post("/task/save", TaskController['save']);

router.get("/task/:id/edit", TaskController['edit']);

router.post("/task/:id/update", TaskController['update']);

router.get("/task/:id/delete", TaskController['delete']);

router.get("/task/:id/toggledone", TaskController['toggleDone']);

export default router;
