import {PrismaClient} from "@prisma/client"

const prisma = new PrismaClient

export default class  ReadVendas{
    
    async execute () {

    const listaVendas = await prisma.vendas.findMany()

    return listaVendas
}
}


export class ReadPorIdTabelaVendas{

    async execute (idVenda:number){

        const id = await prisma.vendas.findUnique({

            where:{

                venda_id: idVenda

            }
        })

        return id;
        
    }}

