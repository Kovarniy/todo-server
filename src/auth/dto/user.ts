import { ApiProperty } from '@nestjs/swagger';

export class User {
  @ApiProperty()
  name: string;
  @ApiProperty()
  password: string;
  roles: string[];
  token: string;
}
