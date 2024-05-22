import {PrismaClient} from "@prisma/client"



const prisma = new PrismaClient


export default class ReadCliente{   

    async execute(idApagar:number){
        
        const findClienterId = await prisma.cliente.findUnique({

            where: {

                cliente_id:

            }
        
        })
        return findClienterId;

    }

}


export  class ReadListaCLientes{

    async execute(){

        const findListaCliente = await prisma.cliente.findMany()

    return findListaCliente;
    }
}







