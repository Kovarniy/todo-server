import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from './dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  login(@Body() user: User) {
    return this.authService.login(user);
  }

  @Post('signup')
  signup(@Body() user: User) {
    return this.authService.signup(user);
  }
}
