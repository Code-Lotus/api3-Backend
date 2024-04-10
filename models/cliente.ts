export default class Cliente {
    private dataCadastro: Date
    private cpfcnpj: string
    private nome: string
    private segmento: string
    

    constructor(dataCadastro:Date,cpfcnpj:string,nome:string,segmento:string){
        this.dataCadastro = dataCadastro
        this.cpfcnpj = cpfcnpj
        this.nome = nome
        this.segmento = segmento
    }

    public get getDataCadastro(): Date {
        return this.dataCadastro
    }
    public set setDataCadastro(value: Date) {
        this.dataCadastro = value
    }
    public get getcpfcnpj(): string {
            return this.cpfcnpj
    }
    public set setcpfcnpj(value: string) {
        this.cpfcnpj = value
    }
    
    public get getnome(): string {
            return this.nome
        }
    public set setnome(value: string) {
            this.nome = value
        }
    
    public get getsegmento(): string {
            return this.segmento
        }
    public set setsegmento(value: string) {
            this.segmento = value
        }
    
}