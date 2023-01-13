import { ListAllTasks } from './../../../application/use-cases/list-all-tasks';
import { DeleteTask } from './../../../application/use-cases/delete-task';
import { CreateTaskBody } from './../dtos/create-task-body';
import { CreateTask } from './../../../application/use-cases/create-task';
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';

@Controller('tasks')
export class TasksController {
  constructor(
    private createTask: CreateTask,
    private deleteTask: DeleteTask,
    private listAllTasks: ListAllTasks,
  ) {}

  @Get()
  async listAll() {
    const { tasks } = await this.listAllTasks.execute();

    return { tasks };
  }

  @Post()
  async create(@Body() body: CreateTaskBody) {
    const { description } = body;

    const { task } = await this.createTask.execute({
      description,
    });

    return { task };
  }

  @Delete('/:id')
  async delete(@Param('id') id: string) {
    const { task } = await this.deleteTask.execute({
      id,
    });

    return { task };
  }
}
