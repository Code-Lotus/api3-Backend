import Cliente from "./cliente";
import Produto from "./produto";
import Vendedor from "./vendedor";

export default class PlanilhaVendas {
    constructor(
        private _data: Date,
        private _vendedor: Vendedor,
        private _produto: Produto,
        private _cliente: Cliente,
        private _valor: number,
        private _formaPagamento: string
    ) {}

    get data(): Date {
        const data = new Date(this._data.getTime());
        return data
    }
}