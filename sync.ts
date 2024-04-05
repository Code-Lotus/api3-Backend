import Venda from './models/vendas';
import sequelize from './config/sequelize';


async function syncModels() {
    await sequelize.sync({ force: true });
}

syncModels();
