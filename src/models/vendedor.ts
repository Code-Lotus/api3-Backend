import PlanilhaVendas from "./planilhaVendas";

export default class Vendedor {
    private _id: number
    private _nome: string
    private _vendasRealizadas: Array<PlanilhaVendas>

    constructor(_id: number, _nome: string) {
        this._id = _id
        this._nome = _nome
        this._vendasRealizadas = []
    }

    get id(): number {
        return this.id
    }

    get nome(): string {
        return this.nome
    }

    get vendasRealizadas(): ReadonlyArray<PlanilhaVendas> {
        return this.vendasRealizadas
    }
}