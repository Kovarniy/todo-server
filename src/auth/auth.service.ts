import { Injectable } from '@nestjs/common';
import { User } from './dto';
import { users } from '../data';
import { Helper } from '../helper';
import { NotFoundError } from 'rxjs';

@Injectable()
export class AuthService {
  signup(newUser: User) {
    let user = users.find(({ name }) => name === newUser.name);
    if (!user) {
      user = {
        ...newUser,
        token: Helper.createToken(),
        id: String(users.length + 1),
        roles: ['user'],
      };
      users.push(user);
      return user;
    }
    return new NotFoundError('This login is already taken');
  }

  login(authUser: User) {
    const user = users.find(
      ({ name, password }) =>
        name === authUser.name && password === authUser.password,
    );
    if (user) {
      return user;
    }
    throw new NotFoundError('incorrect username or password');
  }
}
