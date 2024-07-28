import User from './user';
import sequelize from '../config/config';

const models = {
  User,
};

const initializeModels = async () => {
  await sequelize.authenticate();
  await sequelize.sync();
};

export { sequelize, models, initializeModels };
