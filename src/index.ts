import { apiRoutes } from './routes';
import { AppServer } from './commons/utils';
import { UsersModel } from './domains/users';

const Server = new AppServer({
  routes: {
    api: apiRoutes,
  },
  models: [UsersModel],
});

// start server
Server.serve();
