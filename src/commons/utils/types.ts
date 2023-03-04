import { Router } from 'express';
import { ModelCtor, Model } from 'sequelize-typescript';

type Routings = {
  api?: Router;
  webhook?: Router;
};

export type ServerProperties = {
  port?: string;
  models?: ModelCtor<Model<any, any>>[];
  routes: Routings;
};
