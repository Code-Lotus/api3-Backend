export default class Produto {
    private dataCriacao: Date
    private id: number
    private nome: string
    
    
    constructor( dataCriacao: Date, id: number, nome: string){
        this.dataCriacao=dataCriacao
        this.id=id
        this.nome=nome
    }
     
  public get getDataCriacao(): Date {
        return this.dataCriacao
    }
    public set setDataCriacao(value: Date) {
        this.dataCriacao = value
    }
    public get getId(): number {
        return this.id
    }
    public set setId(value: number) {
        this.id = value
    }
    public get getNome(): string {
        return this.nome
    }
    public set setNome(value: string) {
        this.nome = value
    }
}