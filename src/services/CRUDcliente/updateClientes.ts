import { PrismaClient, Prisma } from '@prisma/client'


const prisma = new PrismaClient;

export default class UpdateCliente{

    async execute(idCliente:number,novoDado:string){

        const updateCliente = await prisma.cliente.update({

            where:{
                cliente_id: idCliente
            }
            data:{
                //altere a opção aqui : novoDado
            }
        })
    return updateCliente;
    }
    
    


}