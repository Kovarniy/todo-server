import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { Todo } from './dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('todo')
@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post(':userId')
  create(@Param('userId') userId: string, @Body() body: { todo: Todo }) {
    return this.todoService.create(userId, body.todo);
  }

  @Get(':userId')
  findAll(@Param('userId') userId: string) {
    return this.todoService.findAll(userId);
  }

  @Patch()
  update(@Body() body: { todo: Todo }) {
    return this.todoService.update(body.todo);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Req() request: Request) {
    console.log(request.headers);
    return this.todoService.remove(
      +id,
      request.headers['authorization'].split(' ')[1],
    );
  }
}
