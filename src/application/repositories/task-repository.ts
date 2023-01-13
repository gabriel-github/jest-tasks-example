import { Task } from '@prisma/client';

export abstract class TasksRepository {
  abstract listAll(): Promise<Task[]>;
  abstract create({ description }: { description: string }): Promise<Task>;
  abstract delete({ id }: { id: string }): Promise<Task>;
}
