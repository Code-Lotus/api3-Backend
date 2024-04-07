export default class Cliente {
    constructor(
        private _cnpjcpf: string,
        private _nome: string,
        private _segmento: string
    ) {}

    get cpfcnpj(): string {
        return this.cpfcnpj
    }

    get nome(): string {
        return this.nome
    }

    get segmento(): string {
        return this.segmento
    }
}