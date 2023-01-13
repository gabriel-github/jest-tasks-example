import { Injectable } from '@nestjs/common';
import { TasksRepository } from '../repositories/task-repository';

interface CreateTaskRequest {
  description: string;
}

@Injectable()
export class CreateTask {
  constructor(private tasksRepository: TasksRepository) {}

  async execute(request: CreateTaskRequest) {
    const { description } = request;

    const task = await this.tasksRepository.create({ description });

    return { task };
  }
}
