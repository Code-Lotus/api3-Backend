export default class Produto {
    constructor(
        private _id: number,
        private _nome: string
    ) {}

    get id(): number {
        return this._id
    }
    
    get nome(): string {
        return this._nome
    }
}