import { Router, Request, Response, IRouter } from "express";
import uuid from "uuid";

import { ITodoListController } from "../types/todolist.controller";
import api from "../services/api";

class TodoListController implements ITodoListController {
  public path: string = "";
  public router: IRouter = Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.get(`${this.path}/`, this.renderDefaultPage);
    this.router.post(`${this.path}/todo`, this.createTodoItem);
    this.router.get(`${this.path}/edit`, this.renderEditPage);
    this.router.put(`${this.path}/edit/:id`, this.editTodoItemById);
  }

  private renderDefaultPage(req: Request, res: Response): void {
    res.render("default", {
      title: "Todo List",
      todos: Object.entries(global.todos),
      api
    });
  }

  private createTodoItem(req: Request, res: Response): void {
    global.todos[uuid()] = {
      ...req.body
    };
    res.redirect("/");
  }

  private renderEditPage(req: Request, res: Response): void {
    res.render("edit", {
      title: "Edit page",
      save: (id: string) => {
        api.todoList
          .put("edit/")
          .then((res: any) => {
            console.log(res);
          })
          .catch((err: any) => {
            console.log(err);
          });
      }
    });
  }

  private editTodoItemById(req: Request, res: Response): void {
    console.log("aaaaaaaaaaaaa");
  }
}

export default new TodoListController();
