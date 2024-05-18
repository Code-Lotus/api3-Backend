import { PrismaClient } from "@prisma/client";




const prisma= new PrismaClient ()


export default class DeltarUmaVenda{
     async execute (idVenda:number) {

    const deleteVenda = await prisma.vendas.delete({
        
        where: {

          venda_id: idVenda

        },
    })

      return deleteVenda;

}}