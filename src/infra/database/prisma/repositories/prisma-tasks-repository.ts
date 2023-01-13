import { Injectable } from '@nestjs/common';
import { Task } from '@prisma/client';
import { TasksRepository } from 'src/application/repositories/task-repository';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaTasksRepository implements TasksRepository {
  constructor(private prismaService: PrismaService) {}

  listAll(): Promise<Task[]> {
    return this.prismaService.task.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async create({ description }: { description: string }): Promise<Task> {
    return await this.prismaService.task.create({
      data: {
        description,
      },
    });
  }

  async delete({ id }: { id: string }): Promise<Task> {
    return await this.prismaService.task.update({
      where: {
        id,
      },
      data: {
        doneAt: new Date(),
      },
    });
  }
}
