import { asClass, asValue, createContainer, InjectionMode } from 'awilix';
import { UsersController, UsersModel, UsersService } from './domains/users';
import { config } from 'dotenv';

config();
const container = createContainer({
  injectionMode: InjectionMode.PROXY,
});

container.register({
  env: asValue(process.env),

  usersController: asClass(UsersController),
  usersService: asClass(UsersService),
  usersModel: asClass(UsersModel),
});

export default container;
