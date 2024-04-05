// sale.model.ts

import { Model } from 'sequelize-typescript';
import sequelize from 'sequelize';

interface atributos {
id: number;
data: Date;
vendedor: string;
produto: string;
cliente: string;
valor: number;
}

export class Venda extends Model<atributos> implements atributos {
public id !: number;
public data!: Date;
public vendedor!: string;
public produto!: string;
public cliente!: string;
public valor!: number;
}

export default Venda;
