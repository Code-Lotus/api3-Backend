export default class Cliente {

    private cliente_id: Number
    private cliente_cpfcnpj: string
    private cliente_nome: string
    private cliente_segmento: string
    private _dataCadastro: Date
    
    constructor(cliente_id: Number, cliente_cpfcnpj: string, cliente_nome: string, cliente_segmento: string, _dataCadastro: Date) {
        this.cliente_id=cliente_id
        this.cliente_nome = cliente_nome
        this.cliente_cpfcnpj = cliente_cpfcnpj
        this.cliente_segmento = cliente_segmento
        this._dataCadastro = _dataCadastro
    }
    
    public get getCliente_id(): Number {
        return this.cliente_id
    }
    public set setCliente_id(value: Number) {
        this.cliente_id = value
    }

    public get getCliente_cpfcnpj(): string {
        return this.cliente_cpfcnpj
    }

    public get nome(): string {
        return this.cliente_nome
    }

    public get getCliente_segmento(): string {
        return this.cliente_segmento
    }

    public get dataCadastro(): Date {
        return this._dataCadastro
    }
}