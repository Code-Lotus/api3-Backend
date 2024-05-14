import { Sequelize } from 'sequelize-typescript';

const sequelize = new Sequelize({
  database: '', // banco de dados
  username: '', //nome de usuário
  password: '', //senha do banco de dados
  host: 'localhost',
  dialect: 'mysql', 
});

export default sequelize;
