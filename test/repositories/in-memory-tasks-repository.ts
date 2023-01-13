import { Task } from '@prisma/client';
import { randomUUID } from 'crypto';
import { TasksRepository } from 'src/application/repositories/task-repository';

export class InMemoryTasksRepository implements TasksRepository {
  public tasks: Task[] = [];

  async listAll(): Promise<Task[]> {
    return await this.tasks;
  }

  async create({ description }: { description: string }): Promise<Task> {
    const newTask: Task = {
      id: randomUUID(),
      createdAt: new Date(),
      updateAt: new Date(),
      description,
      doneAt: null,
    };

    this.tasks.push(newTask);

    return newTask;
  }

  async delete({ id }: { id: string }): Promise<Task> {
    const taskFound = this.tasks.find((task) => task.id === id);

    if (!taskFound) {
      throw new Error('Task non-existent!');
    }

    taskFound.doneAt = new Date();
    taskFound.updateAt = new Date();

    return taskFound;
  }
}
