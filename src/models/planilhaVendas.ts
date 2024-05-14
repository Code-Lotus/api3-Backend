import Cliente from "./cliente";
import Produto from "./produto";
import Venda from "./vendas";
import Vendedor from "./vendedor";

export default class PlanilhaVendas {
    constructor(
        
        public venda_id: Number,
        private venda_data: Date,
        private venda_produto: Vendedor,
        private cliente_id: Cliente,
        private venda_valor: number,
        private usuario_id: string
        
    ) {}

    get data(): Date {
        const data = new Date(this.venda_data.getTime());
        return data
    }

    get valor(): number {
        return this.venda_valor
    }
}