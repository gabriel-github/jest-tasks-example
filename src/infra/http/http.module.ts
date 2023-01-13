import { DatabaseModule } from './../database/database.module';
import { ListAllTasks } from './../../application/use-cases/list-all-tasks';
import { CreateTask } from './../../application/use-cases/create-task';
import { DeleteTask } from './../../application/use-cases/delete-task';
import { TasksController } from './controllers/tasks.controller';
import { Module } from '@nestjs/common';

@Module({
  imports: [DatabaseModule],
  controllers: [TasksController],
  providers: [CreateTask, DeleteTask, ListAllTasks],
})
export class HttpModule {}
