import { PrismaTasksRepository } from './prisma/repositories/prisma-tasks-repository';
import { PrismaService } from './prisma/prisma.service';
import { Module } from '@nestjs/common';
import { TasksRepository } from '../../application/repositories/task-repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: TasksRepository,
      useClass: PrismaTasksRepository,
    },
  ],
  exports: [TasksRepository],
})
export class DatabaseModule {}
