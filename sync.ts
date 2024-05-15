import Venda from './src/models/vendas';
import sequelize from './src/naosei/config/sequelize';


async function syncModels() {
    await sequelize.sync({ force: true });
}

syncModels();
