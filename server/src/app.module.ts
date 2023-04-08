import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [MongooseModule.forRoot(process.env.MONGO_URI), TodoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
