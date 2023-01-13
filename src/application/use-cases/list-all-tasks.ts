import { Injectable } from '@nestjs/common';
import { TasksRepository } from '../repositories/task-repository';

@Injectable()
export class ListAllTasks {
  constructor(private tasksRepository: TasksRepository) {}

  async execute() {
    const tasks = await this.tasksRepository.listAll();

    return { tasks };
  }
}
