import { Injectable } from '@nestjs/common';
import { TasksRepository } from '../repositories/task-repository';

interface DeleteTaskRequest {
  id: string;
}

@Injectable()
export class DeleteTask {
  constructor(private tasksRepository: TasksRepository) {}

  async execute(request: DeleteTaskRequest) {
    const { id } = request;

    const task = await this.tasksRepository.delete({ id });

    return { task };
  }
}
