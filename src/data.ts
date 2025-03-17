import { Helper } from './helper';
import { Todo } from './todo/dto';

export const users = [
  {
    id: '1',
    name: 'John',
    password: '123456',
    token: Helper.createToken(),
    roles: ['admin'],
  },
  {
    id: '2',
    name: 'Alex',
    password: '000000',
    token: Helper.createToken(),
    roles: ['user'],
  },
];

export let todos: Todo[] = [
  {
    id: '1',
    title: 'Придумать тему доклада',
    completed: true,
    createdAt: new Date(),
    ownerId: '1',
  },
  {
    id: '2',
    title: 'Составить план доклада',
    completed: true,
    createdAt: new Date(),
    ownerId: '1',
  },
  {
    id: '3',
    title: 'Разработать проект',
    completed: false,
    createdAt: new Date(),
    ownerId: '1',
  },
  {
    id: '4',
    title: 'Сделать презентацию',
    completed: false,
    createdAt: new Date(),
    ownerId: '1',
  },
  {
    id: '5',
    title: 'Пройти обучение по публичным выступлениям',
    completed: false,
    createdAt: new Date(),
    ownerId: '1',
  },
  {
    id: '6',
    title: 'Отрепетировать выступление',
    completed: false,
    createdAt: new Date(),
    ownerId: '1',
  },
  {
    id: '7',
    title: 'Не опозориться',
    completed: false,
    createdAt: new Date(),
    ownerId: '1',
  },
];

export interface Todos {
  [key: string]: Todo[];
}
