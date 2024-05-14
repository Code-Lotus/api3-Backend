import Cliente from "./cliente"
import Venda from "./vendas"
import Produto from "./produto"

export default class Comissao{
    private tipo!: number
    private porcent!: number
    // private valor!: number
   

    constructor(porcent:number, valor:number,tipo:number){
        this.porcent = porcent
        this.tipo = tipo
        // this.valor = valor
    }
    
    public get getporcent(): number {
        return this.porcent
    }
    public set setporcent(value: number) {
        this.porcent = value
    }
    
    public get getTipo(): number {
        return this.tipo
    }
    public set setTipo(value: number) {
        this.tipo = value
    }

    //  public get getvalor(): number {
    //     return this.valor
    // }
    // public set setvalor(value: number) {
    //     this.valor = value
    // }


    public acharTipo(cliente:Cliente,produto:Produto){

        const hoje = new Date() 
        // const anoMileSeg =  365 * 24 * 60 * 60 * 1000
        const clienteNovo = hoje.getFullYear() - cliente.getDataCadastro.getFullYear() <= 1  // só q se ele for maior que 1 ano por meses ainda retorna 1
        const produtoNovo = hoje.getFullYear() - produto.getDataCriacao.getFullYear() <= 1
        
        if (clienteNovo && produtoNovo) {
            return 5
        } 
        else if (!clienteNovo && produtoNovo) {
            return 10
        } 
        else if (!clienteNovo && !produtoNovo) {
            return 15
        } 
        else {
            return 20
        }
    }

    public calcComissao (comissao:Comissao, venda:Venda ){ 
        
       const valcomissao = venda.getValor * (comissao.getTipo/100)
       return valcomissao

    }
    
}

