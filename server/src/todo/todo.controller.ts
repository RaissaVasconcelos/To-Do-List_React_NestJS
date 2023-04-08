import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Delete,
} from '@nestjs/common';

import { AppService } from './todo.service';

// test de commit
@Controller('/task')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async create(@Body() task: string) {
    return this.appService.create(task);
  }

  @Get()
  async getAll() {
    return this.appService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    return this.appService.getById(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() task: string) {
    return this.appService.update(id, task);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.appService.remove(id);
  }
}