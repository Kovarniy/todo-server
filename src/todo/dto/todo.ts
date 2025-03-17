import { ApiProperty } from '@nestjs/swagger';

export class Todo {
  id: string;
  @ApiProperty()
  title: string;
  @ApiProperty()
  completed: boolean;
  createdAt: Date;
  ownerId?: string;
}
