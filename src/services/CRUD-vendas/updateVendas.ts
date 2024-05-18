import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default class UpdateVenda{
    async excute (idvenda:number,novoDado:string){
       
        const updateVenda = await prisma.vendas.update({

            where: {

                venda_id: idvenda
            },

            data:{
            //   adiciona a tabela aqui   :novoDado
            }
        })

    }



}