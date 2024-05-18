import { PrismaClient } from "@prisma/client"



const prisma =  new PrismaClient();

export default class DeleteCliente{

    async execute (idCliente:number){

        const deleteCliente = await prisma.cliente.delete({

            where:{

                cliente_id: idCliente
            } 
        })
        return deleteCliente;

    }
   
}